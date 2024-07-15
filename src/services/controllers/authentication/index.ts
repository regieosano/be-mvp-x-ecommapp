import { User } from "@src/types";
import { UserModel } from "@src/models/user";
import { constantValuesForMessages } from "@src/values/constants";

export const authenticateUser = async (
  userToBeAuthenticated: User,
  otpInputed: string,
) => {
  const m = constantValuesForMessages()();

  const { isVerified, id, otp, expiresAt } = userToBeAuthenticated;

  if (isVerified) {
    throw m.user_is_verified;
  }

  if (Date.now() > expiresAt) {
    throw m.otp_expired;
  }

  if (otp !== otpInputed) {
    throw m.otp_invalid;
  }

  // Update user status to isVerified true
  try {
    await UserModel.findOneAndUpdate(
      { id },
      {
        $set: {
          isVerified: m.yes,
        },
      },
    );
    return { message: m.otp_valid };
  } catch (error: unknown) {
    throw `${error}`;
  }
};
