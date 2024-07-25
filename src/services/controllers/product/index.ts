import _ from "lodash";
import { Product } from "@src/types";
import { ProductModel } from "@src/models/product";
import { createNewProductObject } from "@src/utilities/product/crud";

export const createProduct: Function = async (
  product: Product,
): Promise<Product> => {
  try {
    const productAsNew = _.assign({}, Object.freeze(product));

    const newProduct: Product = await createNewProductObject(productAsNew);

    await new ProductModel(newProduct).save();

    // Return created new product
    return newProduct;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
