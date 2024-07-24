import { User } from "@src/types";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { implementSetResendCodeValueToTrue } from "@src/utilities/otp";
import { m } from "@src/values/constants";
import not, {
  compareValues,
  otpIsStillValid,
  returnCheckMessage,
} from "@src/utilities/misc";

export const authenticateUser = async (
  userToBeAuthenticated: User,
  otpInputed: string,
) => {
  const { isVerified, id, otp, expiresAt } = userToBeAuthenticated;

  // Check if user was verified already
  isVerified ? returnCheckMessage(m.user_is_verified) : m.null;

  // Check if incorrect otp was entered
  not(compareValues(otp, [otpInputed]))
    ? returnCheckMessage(m.otp_invalid)
    : m.null;

  // Check if otp already expired
  not(otpIsStillValid(Date.now(), expiresAt))
    ? implementSetResendCodeValueToTrue(id)
    : m.null;

  // Update user status to isVerified true
  try {
    return await findAUserAndUpdateFields(id, { isVerified: m.yes });
  } catch (error: unknown) {
    throw `${error}`;
  }
};
