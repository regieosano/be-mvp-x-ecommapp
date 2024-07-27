import Joi from "joi";
import { ResendOTP } from "@src/types";

export const resendOtpDataValidation = function (resendOtpBodyData: ResendOTP) {
  const resendOtpBodyDataForChecking = { ...resendOtpBodyData };

  function validateResendOtpBodyData() {
    return Joi.object({
      id: Joi.string().min(36).max(255).required(),
    });
  }

  return async function () {
    const { id } = resendOtpBodyDataForChecking;

    try {
      const result = await validateResendOtpBodyData().validateAsync({
        id,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
