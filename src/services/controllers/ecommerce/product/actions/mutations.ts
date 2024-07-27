import _ from "lodash";
import mH from "@src/messages/constants/http";
import mP from "@src/messages/constants/product";
import { Product, PostObject } from "@src/types";
import { ProductModel } from "@src/models/product";
import { createNewProductObject } from "@src/utilities/product/crud";

export const createProduct: Function = async (
  product: Product,
): Promise<PostObject> => {
  try {
    const productAsNew = _.assign({}, Object.freeze(product));

    const newProduct: Product = await createNewProductObject(productAsNew);

    await new ProductModel(newProduct).save();

    const result = {
      message: mP.new_product_created,
      data: newProduct,
      http: mH.created,
    };

    return result;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
