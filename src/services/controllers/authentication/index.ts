import _ from "lodash";
import { User } from "@src/types";
import mC from "@src/messages/constants/otp";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import { returnCheckMessage } from "@src/utilities/misc";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { implementSetResendCodeValueToTrue } from "@src/utilities/otp";

export const authenticateUser = async (objectData: {
  id: string;
  otpInput: string;
}) => {
  const { id, otpInput } = Object.assign({}, Object.freeze(objectData));

  const userToBeAuthenticated: User = await findAUserByIdOrEmail({
    id,
  });

  userToBeAuthenticated
    ? _.identity(userToBeAuthenticated)
    : returnCheckMessage(mU.user_does_not_exist);

  const { isVerified, otp, expiresAt } = userToBeAuthenticated;

  // verified already?
  isVerified ? returnCheckMessage(mU.user_is_verified) : mO.null;

  // correct otp?
  _.includes([otpInput], otp) ? mO.null : returnCheckMessage(mC.otp_invalid);

  // otp expired?
  _.negate(() => Date.now() < expiresAt)
    ? implementSetResendCodeValueToTrue(id)
    : mO.null;

  // user to isVerified true
  try {
    return await findAUserAndUpdateFields(id, { isVerified: mO.yes });
  } catch (error: unknown) {
    throw `${error}`;
  }
};
