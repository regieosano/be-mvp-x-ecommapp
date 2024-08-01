import Joi from "joi";
import mP from "@src/messages/constants/product";
import mV from "@src/messages/constants/validation";

export function validateShoppingCartBodyData() {
  return Joi.object({
    shopper: Joi.string().min(mV.min_string).max(mV.max_string).required(),
    products: Joi.array()
      .items(
        Joi.string()
          .min(mP.min_product_id_length)
          .max(mV.max_string)
          .required(),
      )
      .required(),
  });
}
