import {
  isNot,
  lessThan,
  isEntityNotFound,
  areTheTwoMatch,
} from "@src/functions";
import { User } from "@src/types";
import constantMessageValue from "@src/constants/stringnummisc";
import { returnCheckMessage } from "@src/utilities/misc/check";

export function isUserValidCheck(user: User, otpInput: string) {
  if (isEntityNotFound(user)) {
    returnCheckMessage(user, constantMessageValue.user_does_not_exist);
  } else {
    const { isVerified, otp, expiresAt } = user;

    isNot(isVerified)
      ? constantMessageValue.yes
      : returnCheckMessage(user, constantMessageValue.user_is_verified);

    areTheTwoMatch(otp, otpInput)
      ? constantMessageValue.yes
      : returnCheckMessage(user, constantMessageValue.otp_invalid);

    lessThan(Date.now(), expiresAt)
      ? constantMessageValue.yes
      : returnCheckMessage(user, constantMessageValue.otp_expired);
  }
}
