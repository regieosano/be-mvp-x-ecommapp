import Joi from "joi";
import constantMessageValue from "@src/constants/stringnummisc";

export function validateOTPBodyData() {
  return Joi.object({
    _id: Joi.string().min(5).max(constantMessageValue.max_string).required(),
    otpInput: Joi.string()
      .min(constantMessageValue.min_otp)
      .max(constantMessageValue.max_otp)
      .required(),
  });
}
