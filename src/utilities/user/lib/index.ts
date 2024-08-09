import {
  isNot,
  lessThan,
  isEntityFound,
  storeSameValue,
  areTheTwoMatch,
} from "@src/functions";
import { User } from "@src/types";
import mC from "@src/messages/constants/otp";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import { returnCheckMessage } from "@src/utilities/misc/check";

export function isUserValidCheck(user: User, otpInput: string) {
  const userExisting = isEntityFound(user)
    ? returnCheckMessage(mU.user_does_not_exist)
    : storeSameValue(user);

  const { isVerified, otp, expiresAt } = userExisting;

  isNot(isVerified) ? mO.yes : returnCheckMessage(mU.user_is_verified);

  areTheTwoMatch(otp, otpInput) ? mO.yes : returnCheckMessage(mC.otp_invalid);

  lessThan(expiresAt, Date.now())
    ? () => mO.yes
    : returnCheckMessage(mC.otp_expired);
}
