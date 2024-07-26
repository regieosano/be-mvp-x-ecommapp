import _ from "lodash";
import { User } from "@src/types";
import mC from "@src/messages/constants/otp";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import { returnCheckMessage } from "@src/utilities/misc";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { implementSetResendCodeValueToTrue } from "@src/utilities/otp";

export const authenticateUser = async (
  userToBeAuthenticated: User,
  otpInputed: string,
) => {
  const { isVerified, id, otp, expiresAt } = userToBeAuthenticated;

  // Check if user was verified already
  isVerified ? returnCheckMessage(mU.user_is_verified) : mO.null;

  // Check if incorrect otp was entered
  _.includes([otpInputed], otp) ? mO.null : returnCheckMessage(mC.otp_invalid);

  // Check if otp already expired
  _.negate(() => Date.now() < expiresAt)
    ? implementSetResendCodeValueToTrue(id)
    : mO.null;

  // Update user status to isVerified true
  try {
    return await findAUserAndUpdateFields(id, { isVerified: mO.yes });
  } catch (error: unknown) {
    throw `${error}`;
  }
};
