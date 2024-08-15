import {
  isNot,
  lessThan,
  isEntityFound,
  storeSameValue,
  areTheTwoMatch,
} from "@src/functions";
import { User } from "@src/types";
import mU from "@src/messages/constants/user";
import messageValue from "@src/messages/messagevalues";
import { returnCheckMessage } from "@src/utilities/misc/check";

export function isUserValidCheck(user: User, otpInput: string) {
  const userExisting = isEntityFound(user)
    ? storeSameValue(user)
    : returnCheckMessage(mU.user_does_not_exist);

  const { isVerified, otp, expiresAt } = userExisting;

  isNot(isVerified)
    ? messageValue.yes
    : returnCheckMessage(mU.user_is_verified);

  areTheTwoMatch(otp, otpInput)
    ? messageValue.yes
    : returnCheckMessage(messageValue.otp_invalid);

  lessThan(Date.now(), expiresAt)
    ? messageValue.yes
    : returnCheckMessage(messageValue.otp_expired);
}
