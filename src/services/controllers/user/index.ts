import { v4 as uuidv4 } from "uuid";
import { constantValuesForMessages } from "@src/values/constants";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";
import { UserModel } from "@src/models/user";
import { User } from "@src/types";
import { encryptPassword } from "@src/utilities/password";
import { generateOTPAndExpiry } from "@src/utilities/otp";

export const getUsers: Function = async (
  noOfUsers: number,
): Promise<User[] | null> => {
  const m = constantValuesForMessages();

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
  const m = constantValuesForMessages();

  try {
    const candidateUser = Object.assign({}, user);

    // Check if email sent already exist, if it is then return error message
    const userEmailCheck = await UserModel.findOne({
      email: candidateUser.email,
    });

    if (userEmailCheck) {
      throw m.email_message_exist;
    }

    // OTP Generation and Expiry
    const { generatedOTP, expiry } = generateOTPAndExpiry();

    // Create user id by means of uuid library
    const newUserId = uuidv4();

    // Store new values for new user
    const qualifiedNewUser = {
      ...candidateUser,
      id: newUserId,
      otp: generatedOTP,
      expiresAt: expiry,
    };

    // Password encryption
    try {
      const { password } = qualifiedNewUser;
      const encryptedPassword = await encryptPassword(password);
      // Assign encrypted password to new user password property
      qualifiedNewUser.password = encryptedPassword;
    } catch (error: unknown) {
      throw `${error}`;
    }

    // New user is created and stored
    let newUser: User = qualifiedNewUser;

    await new UserModel(newUser)
      .save()
      .then(createdUser => (newUser = createdUser.toObject()));

    // Send OTP Verification Email
    const { email } = qualifiedNewUser;
    await createInstanceEmailBodyAndSendMail(email, generatedOTP);

    // Return created new user
    return newUser;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
