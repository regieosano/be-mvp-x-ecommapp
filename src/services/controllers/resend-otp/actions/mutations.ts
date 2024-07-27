import _ from "lodash";
import mO from "src/messages/constants/others";
import mU from "@src/messages/constants/user";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { returnCheckMessage } from "@src/utilities/misc";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";

export const sendResetOTPEmail: Function = async (userObject: {
  id: string;
}) => {
  try {
    const { id } = userObject;
    const user = await findAUserByIdOrEmail({ id });

    // User exist?
    _.negate(() => _.isObject(user))()
      ? returnCheckMessage(mU.user_does_not_exist)
      : mO.null;

    const { isVerified, isResendCode } = user;

    // User otp resend?
    isVerified
      ? returnCheckMessage(mU.user_is_verified)
      : _.negate(() => isResendCode)()
        ? returnCheckMessage(mU.user_is_not_for_otp_resend)
        : mO.null;

    // OTP Generation Only
    const { generatedOTP, expiry } = generateOTPAndExpiry();
    // Store New OTP Code and Expiry for User
    await findAUserAndUpdateFields(user.id, {
      otp: generatedOTP,
      expiresAt: expiry,
    });
    // Send OTP Verification Email
    const { email } = user;
    await createInstanceEmailBodyAndSendMail(email, generatedOTP);
    // Set ResendCode to False
    await findAUserAndUpdateFields(user.id, { isResendCode: mO.no });

    return { message: "", data: email, http: 200 };
  } catch (error: unknown) {
    throw `${error}`;
  }
};
