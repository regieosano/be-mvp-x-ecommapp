import { UserModel } from "@src/models/user";
import { findEntity } from "@src/utilities/misc/find";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { findEntityAndUpdateFields } from "@src/utilities/misc/find";
import { isNot, isEntityFound, storeSameValue } from "@src/functions";
import constantMessageValue from "@src/constants/stringnummisc";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";

export const sendResetOTPEmail: Function = async (userObject: {
  _id: string;
}) => {
  const { _id } = userObject;
  const userToFind = await findEntity(UserModel, { _id });

  const userFound = isEntityFound(userToFind)
    ? storeSameValue(userToFind)
    : returnCheckMessage(constantMessageValue.user_does_not_exist);

  const { email, isVerified } = userFound;

  isNot(isVerified)
    ? constantMessageValue.yes
    : returnCheckMessage(constantMessageValue.user_is_verified);

  const { generatedOTP, expiry } = generateOTPAndExpiry();

  await findEntityAndUpdateFields(userFound.id, UserModel, {
    otp: generatedOTP,
    expiresAt: expiry,
  });

  return await createInstanceEmailBodyAndSendMail(email, generatedOTP);
};
