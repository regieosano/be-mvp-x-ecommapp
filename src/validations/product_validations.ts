import _ from "lodash";
import Joi from "joi";
import { Product } from "@src/types";

export const productValidation = function (productBodyData: Product) {
  const productBodyDataForChecking = _.assign(
    {},
    Object.freeze(productBodyData),
  );

  function validateProductBodyData() {
    return Joi.object({
      category: Joi.string().min(2).max(255).required(),
      name: Joi.string().min(2).max(255).required(),
      description: Joi.string().min(2).max(255).required(),
      price: Joi.number().min(1).max(1000000).required(),
      qty: Joi.number().max(500000).required(),
    });
  }

  return async function () {
    const { category, name, description, price, qty } =
      productBodyDataForChecking;

    try {
      const result = await validateProductBodyData().validateAsync({
        category,
        name,
        description,
        price,
        qty,
      });
      console.log(result);
      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
