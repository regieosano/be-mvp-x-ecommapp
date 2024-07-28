import Joi from "joi";
import { ShoppingCart } from "@src/types";
import mV from "@src/messages/constants/validation";

export const shoppingCartValidation = function (
  shoppingCartBody: ShoppingCart,
) {
  const shoppingCartBodyForChecking = Object.assign(
    {},
    Object.freeze(shoppingCartBody),
  );

  function validateShoppingCartBody() {
    return Joi.object({
      userId: Joi.string().min(mV.min_string).max(mV.max_string).required(),
      products: Joi.array().items(Joi.string()).required(),
    });
  }

  return async function () {
    const { userId, products } = shoppingCartBodyForChecking;

    try {
      const result = await validateShoppingCartBody().validateAsync({
        userId,
        products,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
