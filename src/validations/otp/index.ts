import Joi from "joi";
import { OTPData } from "@src/types";

export const otpDataValidation = function (otpBodyData: OTPData) {
  const otpBodyDataForChecking = { ...otpBodyData };

  function validateOTPBodyData() {
    return Joi.object({
      id: Joi.string().min(5).max(255).required(),
      otpInput: Joi.string().min(6).max(6).required(),
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
