import Joi from "joi";
import { ShoppingCart } from "@src/types";
import mV from "@src/messages/constants/validation";
import mP from "@src/messages/constants/product";

export const shoppingCartValidation = function (
  shoppingCartBody: ShoppingCart,
) {
  const shoppingCartBodyForChecking = Object.assign(
    {},
    Object.freeze(shoppingCartBody),
  );

  function validateShoppingCartBody() {
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

  return async function () {
    const { shopper, products } = shoppingCartBodyForChecking;

    try {
      const result = await validateShoppingCartBody().validateAsync({
        shopper,
        products,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
