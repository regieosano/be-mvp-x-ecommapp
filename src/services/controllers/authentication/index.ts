import { User } from "@src/types";
import { UserModel } from "@src/models/user";
import { constantValuesForMessages } from "@src/values/constants";

export const authenticateUser = async (
  userToBeAuthenticated: User,
  otpInputed: string,
) => {
  const m = constantValuesForMessages();

  const { isVerified, id, otp, expiresAt } = userToBeAuthenticated;

  /* Check if user was verified already
	 -> then return bec. verified already */
  if (isVerified) {
    throw m.user_is_verified;
  }

  /* Check if otp already expired
	 -> then return bec. it is expired */
  if (Date.now() > expiresAt) {
    throw m.otp_expired;
  }

  /* Check if incorrect otp was entered
	 -> then return bec. invalid otp */
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
