import { v4 as uuidv4 } from "uuid";
import { constantValuesForMessages } from "@src/values/constants";
import {
  SUBJECT_CONTENT,
  TEXT_CONTENT,
  HTML_CONTENT,
} from "@src/services/email/content";
import { UserModel } from "@src/models/user";
import { User } from "@src/types";
import { sendMail } from "@src/services/email";
import { encryptPassword } from "@src/utilities/password";
import { generateOTPAndExpiry } from "@src/utilities/otp";

export const getUsers: Function = async (
  noOfUsers: number,
): Promise<User[] | null> => {
  const m = constantValuesForMessages()();

  try {
    // Get all "verified" users
    const verifiedUsers = await UserModel.find({
      isVerified: m.yes,
    }).limit(noOfUsers);
    return verifiedUsers;
  } catch (error: unknown) {
    throw `${error}`;
  }
};

export const createUser: Function = async (user: User): Promise<User> => {
  const m = constantValuesForMessages()();

  try {
    const candidateUser = Object.assign({}, user);

    // Check if email sent already exist, if it is then return error message
    const userEmailCheck = await UserModel.findOne({
      email: candidateUser.email,
    });

    if (userEmailCheck) {
      throw new Error(m.email_message_exist);
    }

    // OTP generation and creation of mail service
    const { otp, expiry } = generateOTPAndExpiry();

    const newEmailBody = {
      emailSentTo: candidateUser.email,
      emailSubject: SUBJECT_CONTENT,
      emailText: TEXT_CONTENT,
      emailHTML: HTML_CONTENT + " " + otp,
    };

    // Send OTP Verification
    await sendMail(newEmailBody);

    // Create user id by means of uuid library
    const newUserId = uuidv4();

    // Store new values for new user
    candidateUser.id = newUserId;
    candidateUser.otp = String(otp);
    candidateUser.expiresAt = Number(expiry);

    // Password encryption
    try {
      candidateUser.password = await encryptPassword(candidateUser.password);
    } catch (error: unknown) {
      throw `${error}`;
    }

    // New user is created and returned
    let newUser: User = candidateUser;

    await new UserModel(newUser)
      .save()
      .then(createdUser => (newUser = createdUser.toObject()));

    return newUser;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
