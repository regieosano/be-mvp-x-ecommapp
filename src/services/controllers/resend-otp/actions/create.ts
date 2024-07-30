import { not, is } from "ramda";
import { UserModel } from "@src/models/user";
import mU from "@src/messages/constants/user";
import mO from "src/messages/constants/others";
import { findEntity } from "@src/utilities/misc";
import { returnCheckMessage } from "@src/utilities/misc";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";

export const sendResetOTPEmail: Function = async (userObject: {
  _id: string;
}) => {
  try {
    const { _id } = userObject;
    const user = await findEntity(UserModel, { _id });

    // user exist?
    not(is(Object, user))
      ? returnCheckMessage(mU.user_does_not_exist)
      : mO.null;

    const { email, isVerified, isResendCode } = user;

    isVerified
      ? returnCheckMessage(mU.user_is_verified)
      : not(isResendCode)
        ? returnCheckMessage(mU.user_is_not_for_otp_resend)
        : mO.null;

    // otp generation
    const { generatedOTP, expiry } = generateOTPAndExpiry();

    // store new otp code
    await findAUserAndUpdateFields(user.id, {
      otp: generatedOTP,
      expiresAt: expiry,
    });

    // set resendCode to false
    await findAUserAndUpdateFields(_id, { isResendCode: mO.no });

    return await createInstanceEmailBodyAndSendMail(email, generatedOTP);
  } catch (error: unknown) {
    throw `${error}`;
  }
};
