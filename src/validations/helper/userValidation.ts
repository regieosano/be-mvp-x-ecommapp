import Joi from "joi";
import mV from "@src/messages/constants/validation";
import messageValue from "@src/messages/messagevalues";

export function validateUserBodyData() {
  return Joi.object({
    name: Joi.string().min(mV.min_string).max(mV.max_string).required(),
    address: Joi.string().min(mV.min_string).max(mV.max_string).optional(),
    dob: Joi.date().optional(),
    email: Joi.string()
      .email({ tlds: { allow: messageValue.no } })
      .required(),
    cellNumber: Joi.string()
      .min(mV.min_cell_num)
      .max(mV.max_cell_num)
      .optional(),
    gender: Joi.string().min(mV.min_gender).max(mV.max_gender).optional(),
    password: Joi.string().min(mV.min_password).max(mV.max_password).optional(),
  });
}
