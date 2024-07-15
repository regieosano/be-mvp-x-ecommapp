import { User } from "@src/types";
import { UserModel } from "@src/models/user";

import {
  YES,
  OTP_VALID,
  OTP_INVALID,
  OTP_EXPIRED,
  USER_IS_VERIFIED,
} from "@src/values/constants";

export const authenticateUser = async (
  userToBeAuthenticated: User,
  otpInputed: string,
) => {
  const { isVerified, id, otp, expiresAt } = userToBeAuthenticated;

  if (isVerified) {
    throw USER_IS_VERIFIED;
  }

  if (Date.now() > expiresAt) {
    throw OTP_EXPIRED;
  }

  if (otp !== otpInputed) {
    throw OTP_INVALID;
  }

  // Update user status to isVerified true
  try {
    await UserModel.findOneAndUpdate(
      { id },
      {
        $set: {
          isVerified: YES,
        },
      },
    );
    return { message: OTP_VALID };
  } catch (error: unknown) {
    throw `${error}`;
  }
};
