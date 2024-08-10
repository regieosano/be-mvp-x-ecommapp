import mH from "@src/messages/constants/http";
import { Product, Response } from "@src/types";
import mP from "@src/messages/constants/product";
import { ProductModel } from "@src/models/product";
import { findEntity } from "@src/utilities/misc/find";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { isEntityFound, storeSameValue } from "@src/functions";
import { createObject } from "@src/utilities/crudFactory/create";

export const createProduct: Function = async (
  product: Product,
): Promise<Response> => {
  const productCandidate = Object.assign({}, Object.freeze(product));
  const { name } = productCandidate;

  const productToFind: Product = await findEntity(ProductModel, { name });

  const productAsNew = isEntityFound(productToFind)
    ? returnCheckMessage(mP.product_name_exist)
    : storeSameValue(productCandidate);

  const newProduct: Product = await createObject(ProductModel, productAsNew);

  const result: Response = {
    message: mP.new_product_created,
    data: newProduct,
    http: mH.created,
  };

  return result;
};
