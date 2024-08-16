import {
  isNot,
  lessThan,
  isEntityFound,
  storeSameValue,
  areTheTwoMatch,
} from "@src/functions";
import { User } from "@src/types";
import constantMessageValue from "@src/constants/stringnummisc";
import { returnCheckMessage } from "@src/utilities/misc/check";

export function isUserValidCheck(user: User, otpInput: string) {
  const userExisting = isEntityFound(user)
    ? storeSameValue(user)
    : returnCheckMessage(constantMessageValue.user_does_not_exist);

  const { isVerified, otp, expiresAt } = userExisting;

  isNot(isVerified)
    ? constantMessageValue.yes
    : returnCheckMessage(constantMessageValue.user_is_verified);

  areTheTwoMatch(otp, otpInput)
    ? constantMessageValue.yes
    : returnCheckMessage(constantMessageValue.otp_invalid);

  lessThan(Date.now(), expiresAt)
    ? constantMessageValue.yes
    : returnCheckMessage(constantMessageValue.otp_expired);
}
