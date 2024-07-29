import Joi from "joi";
import { ResendOTP } from "@src/types";
import mV from "@src/messages/constants/validation";

export const resendOtpDataValidation = function (resendOtpBodyData: ResendOTP) {
  const resendOtpBodyDataForChecking = { ...resendOtpBodyData };

  function validateResendOtpBodyData() {
    return Joi.object({
      _id: Joi.string().min(36).max(mV.max_string).required(),
    });
  }

  return async function () {
    const { _id } = resendOtpBodyDataForChecking;

    try {
      const result = await validateResendOtpBodyData().validateAsync({
        _id,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
