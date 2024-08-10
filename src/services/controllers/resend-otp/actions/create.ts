import { UserModel } from "@src/models/user";
import mU from "@src/messages/constants/user";
import mO from "src/messages/constants/others";
import { findEntity } from "@src/utilities/misc/find";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { isNot, isEntityFound, storeSameValue } from "@src/functions";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { findEntityAndUpdateFields } from "@src/utilities/misc/find";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";

export const sendResetOTPEmail: Function = async (userObject: {
  _id: string;
}) => {
  const { _id } = userObject;
  const userToFind = await findEntity(UserModel, { _id });

  const userFound = isEntityFound(userToFind)
    ? storeSameValue(userToFind)
    : returnCheckMessage(mU.user_does_not_exist);

  const { email, isVerified } = userFound;

  isNot(isVerified) ? mO.yes : returnCheckMessage(mU.user_is_verified);

  const { generatedOTP, expiry } = generateOTPAndExpiry();

  await findEntityAndUpdateFields(userFound.id, UserModel, {
    otp: generatedOTP,
    expiresAt: expiry,
  });

  return await createInstanceEmailBodyAndSendMail(email, generatedOTP);
};
