import Joi from "joi";
import constantMessageValue from "@src/constants/stringnummisc";

export function validateResendOtpBodyData() {
  return Joi.object({
    _id: Joi.string()
      .min(constantMessageValue.min_string)
      .max(constantMessageValue.max_string)
      .required(),
  });
}
