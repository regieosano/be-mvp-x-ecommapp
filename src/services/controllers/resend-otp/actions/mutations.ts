import _ from "lodash";
import { UserModel } from "@src/models/user";
import mU from "@src/messages/constants/user";
import mO from "src/messages/constants/others";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { returnCheckMessage } from "@src/utilities/misc";
import { findEntity } from "@src/utilities/misc";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";

export const sendResetOTPEmail: Function = async (userObject: {
  id: string;
}) => {
  try {
    const { id } = userObject;
    const user = await findEntity(UserModel, { id });

    // user exist?
    _.negate(() => _.isObject(user))()
      ? returnCheckMessage(mU.user_does_not_exist)
      : mO.null;

    const { isVerified, isResendCode } = user;

    // user otp resend?
    isVerified
      ? returnCheckMessage(mU.user_is_verified)
      : _.negate(() => isResendCode)()
        ? returnCheckMessage(mU.user_is_not_for_otp_resend)
        : mO.null;

    // otp generation only
    const { generatedOTP, expiry } = generateOTPAndExpiry();

    // store new otp code and expiry
    await findAUserAndUpdateFields(user.id, {
      otp: generatedOTP,
      expiresAt: expiry,
    });

    // send otp verification email
    const { email } = user;

    // set resendCode to False
    await findAUserAndUpdateFields(user.id, { isResendCode: mO.no });

    return await createInstanceEmailBodyAndSendMail(email, generatedOTP);
  } catch (error: unknown) {
    throw `${error}`;
  }
};
