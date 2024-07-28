import Joi from "joi";
import { OTPData } from "@src/types";
import mV from "@src/messages/constants/validation";

export const otpDataValidation = function (otpBodyData: OTPData) {
  const otpBodyDataForChecking = { ...otpBodyData };

  function validateOTPBodyData() {
    return Joi.object({
      id: Joi.string().min(5).max(mV.max_string).required(),
      otpInput: Joi.string().min(mV.min_otp).max(mV.max_otp).required(),
    });
  }

  return async function () {
    const { id, otpInput } = otpBodyDataForChecking;

    try {
      const result = await validateOTPBodyData().validateAsync({
        id,
        otpInput,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
