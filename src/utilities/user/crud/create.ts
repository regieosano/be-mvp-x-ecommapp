import { User } from "@src/types";
import { encryptPassword } from "@src/utilities/password";
import { generateOTPAndExpiry } from "@src/utilities/otp";

export const createNewUserObject: Function = async (
  candidateUser: User,
): Promise<User> => {
  try {
    const { generatedOTP, expiry } = generateOTPAndExpiry();

    let encryptedPassword;
    try {
      const { password } = candidateUser;
      encryptedPassword = await encryptPassword(password);
    } catch (error: unknown) {
      throw `${error}`;
    }

    // store new values
    const qualifiedNewUser: User = {
      ...candidateUser,
      password: encryptedPassword,
      otp: generatedOTP,
      expiresAt: expiry,
    };

    return await qualifiedNewUser;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
