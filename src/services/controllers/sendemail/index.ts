import { UserModel } from "@src/models/user";
import mU from "@src/messages/constants/user";
import { findEntity } from "@src/utilities/misc/find";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { isEntityFound, storeSameValue } from "@src/functions";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";

export const sendOTPEmail = async function (userData: {
  email: string;
  otp: string;
}) {
  const { email, otp } = userData;

  const user = await findEntity(UserModel, { email });

  isEntityFound(user)
    ? storeSameValue(user)
    : returnCheckMessage(mU.user_does_not_exist);

  const result = await createInstanceEmailBodyAndSendMail(email, otp);

  return result;
};
