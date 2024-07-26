import { User } from "@src/types";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { implementSetResendCodeValueToTrue } from "@src/utilities/otp";
import mO from "@src/messages/constants/others";
import mH from "@src/messages/constants/http";
import mS from "@src/messages/constants/server";
import mU from "@src/messages/constants/user";
import mC from "@src/messages/constants/otp";
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
  isVerified ? returnCheckMessage(mU.user_is_verified) : mO.null;

  // Check if incorrect otp was entered
  not(compareValues(otp, [otpInputed]))
    ? returnCheckMessage(mC.otp_invalid)
    : mO.null;

  // Check if otp already expired
  not(otpIsStillValid(Date.now(), expiresAt))
    ? implementSetResendCodeValueToTrue(id)
    : mO.null;

  // Update user status to isVerified true
  try {
    return await findAUserAndUpdateFields(id, { isVerified: mO.yes });
  } catch (error: unknown) {
    throw `${error}`;
  }
};
