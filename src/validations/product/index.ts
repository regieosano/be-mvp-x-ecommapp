import Joi from "joi";
import { Product } from "@src/types";
import { validateProductBody } from "@src/validations/helper/productValidation";

export const productValidation = function (productBody: Product) {
  const productBodyForChecking = Object.assign({}, Object.freeze(productBody));

  return async function () {
    const { category, name, description, price, qty } = productBodyForChecking;

    try {
      const result = await validateProductBody().validateAsync({
        category,
        name,
        description,
        price,
        qty,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
