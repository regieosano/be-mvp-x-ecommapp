import mH from "@src/messages/constants/http";
import mO from "@src/messages/constants/others";
import mP from "@src/messages/constants/product";
import { Product, Response } from "@src/types";
import { findEntity } from "@src/utilities/misc/find";
import { ProductModel } from "@src/models/product";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { createObject } from "@src/utilities/crudFactory/create";

export const createProduct: Function = async (
  product: Product,
): Promise<Response> => {
  try {
    const productAsNew = Object.assign({}, Object.freeze(product));
    const { name } = productAsNew;

    const _product: Product = await findEntity(ProductModel, { name });

    _product ? returnCheckMessage(mP.product_name_exist) : mO.null;

    const newProduct: Product = await createObject(ProductModel, productAsNew);

    const result: Response = {
      message: mP.new_product_created,
      data: newProduct,
      http: mH.created,
    };

    return result;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
