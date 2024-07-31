import { User } from "@src/types";
import mC from "@src/messages/constants/otp";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import { not, includes, identity } from "ramda";
import { returnCheckMessage } from "@src/utilities/misc";
import { implementSetResendCodeValueToTrue } from "@src/utilities/otp";

export function isUserValidCheck(user: User, otpInput: string) {
  try {
    user ? identity(user) : returnCheckMessage(mU.user_does_not_exist);

    const { _id, isVerified, otp, expiresAt } = user;

    isVerified ? returnCheckMessage(mU.user_is_verified) : mO.null;

    includes(otp, [otpInput]) ? mO.null : returnCheckMessage(mC.otp_invalid);

    not(Date.now() < expiresAt)
      ? implementSetResendCodeValueToTrue(_id)
      : mO.null;

    return mO.yes;
  } catch (error: unknown) {
    throw `${error}`;
  }
}
