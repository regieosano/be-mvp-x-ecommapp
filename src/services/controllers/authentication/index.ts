import { User } from "@src/types";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { constantValuesForMessages } from "@src/values/constants";
import not, { compareValues, otpIsStillValid } from "@src/utilities/misc";

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

  /* Check if incorrect otp was entered  
	 -> then return bec. otp is invalid */
  if (not(compareValues(otp, [otpInputed]))) {
    throw m.otp_invalid;
  }

  /* Check if otp already expired
	 -> then return with message bec. it is expired */
  if (not(otpIsStillValid(Date.now(), expiresAt))) {
    return { message: m.otp_expired };
  }

  // Update user status to isVerified true
  try {
    const result = await findAUserAndUpdateFields(id, { isVerified: m.yes });
    return result;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
