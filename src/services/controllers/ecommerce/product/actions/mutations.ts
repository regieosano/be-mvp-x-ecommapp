import mH from "@src/messages/constants/http";
import mO from "@src/messages/constants/others";
import mP from "@src/messages/constants/product";
import { Product } from "@src/types";
import { findEntity } from "@src/utilities/misc";
import { ProductModel } from "@src/models/product";
import { returnCheckMessage } from "@src/utilities/misc";
import { createNewProductObject } from "@src/utilities/product/crud";

export const createProduct: Function = async (
  product: Product,
): Promise<Object> => {
  try {
    const productAsNew = Object.assign({}, Object.freeze(product));
    const { name } = productAsNew;

    // product existing?
    const _product: Product = await findEntity(ProductModel, { name });

    _product ? returnCheckMessage(mP.product_name_exist) : mO.null;

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
