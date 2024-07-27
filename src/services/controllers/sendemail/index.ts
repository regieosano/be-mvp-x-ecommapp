import _ from "lodash";
import mU from "@src/messages/constants/user";
import { findAUserByIdOrEmail } from "@src/utilities/user";

import { returnCheckMessage } from "@src/utilities/misc";

import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";

export const sendOTPEmail = async function (userData: {
  email: string;
  otp: string;
}) {
  try {
    const { email, otp } = userData;

    const user = await findAUserByIdOrEmail({ email });

    user ? _.identity(user) : returnCheckMessage(mU.user_does_not_exist);

    //  Send OTP Verification Email
    const result = await createInstanceEmailBodyAndSendMail(email, otp);

    return { message: result };
  } catch (error: unknown) {
    throw `${error}`;
  }
};
