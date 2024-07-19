import { constantValuesForMessages } from "@src/values/constants";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";
import { UserModel } from "@src/models/user";
import { User } from "@src/types";
import { createNewUserObject } from "@src/utilities/user/crud";

export const getVerifiedUsers: Function = async (
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

export const createUserAndSendEmailOTP: Function = async (
  user: User,
): Promise<User> => {
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

    // New user is created and stored
    const newUser: User = await createNewUserObject(candidateUser);

    await new UserModel(newUser).save();

    // Send OTP Verification Email
    const { email } = newUser;
    await createInstanceEmailBodyAndSendMail(email, newUser["otp"]);

    // Return created new user
    return newUser;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
