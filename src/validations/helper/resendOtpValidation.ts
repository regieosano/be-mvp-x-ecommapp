import Joi from "joi";
import mV from "@src/messages/constants/validation";

export function validateResendOtpBodyData() {
  return Joi.object({
    _id: Joi.string().min(mV.min_string).max(mV.max_string).required(),
  });
}
