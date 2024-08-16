import Joi from "joi";
import constantMessageValue from "@src/constants/stringnummisc";

export function validateUserBodyData() {
  return Joi.object({
    name: Joi.string()
      .min(constantMessageValue.min_string)
      .max(constantMessageValue.max_string)
      .required(),
    address: Joi.string()
      .min(constantMessageValue.min_string)
      .max(constantMessageValue.max_string)
      .optional(),
    dob: Joi.date().optional(),
    email: Joi.string()
      .email({ tlds: { allow: constantMessageValue.no } })
      .required(),
    cellNumber: Joi.string()
      .min(constantMessageValue.min_cell_num)
      .max(constantMessageValue.max_cell_num)
      .optional(),
    gender: Joi.string()
      .min(constantMessageValue.min_gender)
      .max(constantMessageValue.max_gender)
      .optional(),
    password: Joi.string()
      .min(constantMessageValue.min_password)
      .max(constantMessageValue.max_password)
      .optional(),
  });
}
