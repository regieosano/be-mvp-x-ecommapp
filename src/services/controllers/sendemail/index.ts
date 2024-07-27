import _ from "lodash";
import { UserModel } from "@src/models/user";
import mU from "@src/messages/constants/user";
import { findEntity } from "@src/utilities/misc";
import { returnCheckMessage } from "@src/utilities/misc";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";

export const sendOTPEmail = async function (userData: {
  email: string;
  otp: string;
}) {
  try {
    const { email, otp } = userData;

    const user = await findEntity(UserModel, { email });

    user ? _.identity(user) : returnCheckMessage(mU.user_does_not_exist);

    // send otp verification email
    const result = await createInstanceEmailBodyAndSendMail(email, otp);

    return result;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
