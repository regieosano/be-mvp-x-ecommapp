import Joi from "joi";
import constantMessageValue from "@src/constants/stringnummisc";

export function validateShoppingCartBodyData() {
  return Joi.object({
    shopper: Joi.string()
      .min(constantMessageValue.min_string)
      .max(constantMessageValue.max_string)
      .required(),
    products: Joi.array()
      .items(
        Joi.string()
          .min(constantMessageValue.min_product_id_length)
          .max(constantMessageValue.max_string)
          .required(),
      )
      .required(),
  });
}
