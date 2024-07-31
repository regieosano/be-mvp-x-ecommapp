import Joi from "joi";
import mO from "@src/messages/constants/others";
import mV from "@src/messages/constants/validation";

export function validateUserBodyData() {
  return Joi.object({
    name: Joi.string().min(mV.min_string).max(mV.max_string).required(),
    address: Joi.string().min(mV.min_string).max(mV.max_string).optional(),
    dob: Joi.date().optional(),
    email: Joi.string()
      .email({ tlds: { allow: mO.no } })
      .required(),
    cellNumber: Joi.string()
      .min(mV.min_cell_num)
      .max(mV.max_cell_num)
      .optional(),
    gender: Joi.string().min(mV.min_gender).max(mV.max_gender).optional(),
    password: Joi.string().min(mV.min_password).max(mV.max_password).optional(),
  });
}
