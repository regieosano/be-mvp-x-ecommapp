import { User } from "@src/types";
import { encryptPassword } from "@src/utilities/password";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { v4 as uuidv4 } from "uuid";

export const createNewUserObject: Function = async (
  candidateUser: User,
): Promise<User> => {
  try {
    // OTP Generation and Expiry
    const { generatedOTP, expiry } = generateOTPAndExpiry();

    // Create user id by means of uuid library
    const newUserId = uuidv4();

    // Password encryption
    let encryptedPassword;
    try {
      const { password } = candidateUser;
      encryptedPassword = await encryptPassword(password);
    } catch (error: unknown) {
      throw `${error}`;
    }

    // Store new values for new user
    const qualifiedNewUser = {
      ...candidateUser,
      id: newUserId,
      password: encryptedPassword,
      otp: generatedOTP,
      expiresAt: expiry,
    };

    return await qualifiedNewUser;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
