import { ShoppingCart } from "@src/types";
import { validateShoppingCartBodyData } from "@src/validations/helper/shoppingCartValidation";

export const shoppingCartValidation = function (
  shoppingCartBody: ShoppingCart,
) {
  const shoppingCartBodyForChecking = Object.assign(
    {},
    Object.freeze(shoppingCartBody),
  );

  return async function () {
    const { shopper, products } = shoppingCartBodyForChecking;

    try {
      const result = await validateShoppingCartBodyData().validateAsync({
        shopper,
        products,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
