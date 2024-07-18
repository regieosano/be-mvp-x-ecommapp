import { User } from "@src/types";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { constantValuesForMessages } from "@src/values/constants";
import not, { compare, otpIsStillValid } from "@src/utilities/misc";

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
	 -> then return bec. invalid otp */
  if (not(compare(otp, [otpInputed]))) {
    throw m.otp_invalid;
  }

  /* Check if otp already expired
	 -> then set resendCode to true and
	    return bec. it is expired */
  if (otpIsStillValid(Date.now(), expiresAt)) {
    // TODO: Impurity
    // if (!setResendCodeToTrue(id)) throw m.something_went_wrong;
    // throw m.otp_expired;
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
