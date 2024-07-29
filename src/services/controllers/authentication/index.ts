import { User } from "@src/types";
import { UserModel } from "@src/models/user";
import mC from "@src/messages/constants/otp";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import { not, includes, identity } from "ramda";
import { findEntity } from "@src/utilities/misc";
import { returnCheckMessage } from "@src/utilities/misc";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { implementSetResendCodeValueToTrue } from "@src/utilities/otp";

export const authenticateUser = async (objectData: {
  _id: string;
  otpInput: string;
}) => {
  const { _id, otpInput } = Object.assign({}, Object.freeze(objectData));

  const userToBeAuthenticated: User = await findEntity(UserModel, {
    _id,
  });

  userToBeAuthenticated
    ? identity(userToBeAuthenticated)
    : returnCheckMessage(mU.user_does_not_exist);

  const { isVerified, otp, expiresAt } = userToBeAuthenticated;

  // verified already?
  isVerified ? returnCheckMessage(mU.user_is_verified) : mO.null;

  // correct otp?
  includes(otp, [otpInput]) ? mO.null : returnCheckMessage(mC.otp_invalid);

  // otp expired?
  not(Date.now() < expiresAt)
    ? implementSetResendCodeValueToTrue(_id)
    : mO.null;

  // user to isVerified true
  try {
    return await findAUserAndUpdateFields(_id, { isVerified: mO.yes });
  } catch (error: unknown) {
    throw `${error}`;
  }
};
