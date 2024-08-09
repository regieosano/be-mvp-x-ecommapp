import Joi from "joi";
import mV from "@src/messages/constants/validation";
import mO from "@src/messages/constants/others";

export function validateProductBodyData() {
  return Joi.object({
    category: Joi.string().min(mV.min_string).max(mV.max_string).required(),
    name: Joi.string().min(mV.min_string).max(mV.max_string).required(),
    image: Joi.string().min(mV.min_string).required(),
    description: Joi.string().min(mV.min_string).max(mV.max_string).required(),
    price: Joi.number().min(mV.min_price).max(mV.max_price).required(),
    qty: Joi.number().min(mV.min_qty).max(mV.max_qty).required(),
    isApproved: Joi.boolean().optional().default(mO.yes),
    isAvailable: Joi.boolean().optional().default(mO.yes),
    createdAt: Joi.date().optional().default(Date.now()),
    updatedAt: Joi.date().optional().default(Date.now()),
  });
}
