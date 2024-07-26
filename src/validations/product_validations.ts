import Joi from "joi";
import _ from "lodash";
import { Product } from "@src/types";
import mV from "@src/messages/constants/validation";

export const productValidation = function (productBody: Product) {
  const productBodyForChecking = _.assign({}, Object.freeze(productBody));

  function validateProductBody() {
    return Joi.object({
      category: Joi.string().min(mV.min_string).max(mV.max_string).required(),
      name: Joi.string().min(mV.min_string).max(mV.max_string).required(),
      description: Joi.string()
        .min(mV.min_string)
        .max(mV.max_string)
        .required(),
      price: Joi.number().min(mV.min_price).max(mV.max_price).required(),
      qty: Joi.number().min(mV.min_qty).max(mV.max_qty).required(),
    });
  }

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
