import Joi from "joi";
import { EmailOTP } from "@src/types";
import mV from "@src/messages/constants/validation";

export const emailOtpDataValidation = function (emailOtpBodyData: EmailOTP) {
  const emailOtpBodyDataForChecking = { ...emailOtpBodyData };

  function validateEmailOTPBodyData() {
    return Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      otp: Joi.string().min(mV.min_otp).max(mV.max_otp).required(),
    });
  }

  return async function () {
    const { email, otp } = emailOtpBodyDataForChecking;

    try {
      const result = await validateEmailOTPBodyData().validateAsync({
        email,
        otp,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
