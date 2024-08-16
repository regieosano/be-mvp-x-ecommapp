import Joi from "joi";
import constantMessageValue from "@src/constants/stringnummisc";

export function validateProductBodyData() {
  return Joi.object({
    category: Joi.string()
      .min(constantMessageValue.min_string)
      .max(constantMessageValue.max_string)
      .required(),
    name: Joi.string()
      .min(constantMessageValue.min_string)
      .max(constantMessageValue.max_string)
      .required(),
    image: Joi.string().min(constantMessageValue.min_string).required(),
    description: Joi.string()
      .min(constantMessageValue.min_string)
      .max(constantMessageValue.max_string)
      .required(),
    price: Joi.number()
      .min(constantMessageValue.min_price)
      .max(constantMessageValue.max_price)
      .required(),
    qty: Joi.number()
      .min(constantMessageValue.min_qty)
      .max(constantMessageValue.max_qty)
      .required(),
    isApproved: Joi.boolean().optional().default(constantMessageValue.yes),
    isAvailable: Joi.boolean().optional().default(constantMessageValue.yes),
    createdAt: Joi.date().optional().default(Date.now()),
    updatedAt: Joi.date().optional().default(Date.now()),
  });
}
