import Joi from "joi";
import mV from "@src/messages/constants/validation";

export function validateOTPBodyData() {
  return Joi.object({
    _id: Joi.string().min(5).max(mV.max_string).required(),
    otpInput: Joi.string().min(mV.min_otp).max(mV.max_otp).required(),
  });
}
