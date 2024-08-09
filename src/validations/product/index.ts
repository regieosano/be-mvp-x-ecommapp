import { Product } from "@src/types";
import { validateProductBodyData } from "@src/validations/helper/productValidation";

export const productValidation = function (productBody: Product) {
  const productBodyForChecking = Object.assign({}, Object.freeze(productBody));

  return async function () {
    const {
      category,
      name,
      image,
      description,
      price,
      qty,
      isApproved,
      isAvailable,
      createdAt,
      updatedAt,
    } = productBodyForChecking;

    try {
      const result = await validateProductBodyData().validateAsync({
        category,
        name,
        image,
        description,
        price,
        qty,
        isApproved,
        isAvailable,
        createdAt,
        updatedAt,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
