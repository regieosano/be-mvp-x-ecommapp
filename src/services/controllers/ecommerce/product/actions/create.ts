import { Product, Response } from "@src/types";
import { ProductModel } from "@src/models/product";
import { findEntity } from "@src/utilities/misc/find";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { isEntityFound, storeSameValue } from "@src/functions";
import { createObject } from "@src/utilities/crudFactory/create";
import constantMessageValue from "@src/constants/stringnummisc";

export const createProduct: Function = async (
  product: Product,
): Promise<Response> => {
  const productCandidate = Object.assign({}, Object.freeze(product));
  const { name } = productCandidate;

  const productToFind: Product = await findEntity(ProductModel, { name });

  const productAsNew = isEntityFound(productToFind)
    ? returnCheckMessage(constantMessageValue.product_name_exist)
    : storeSameValue(productCandidate);

  const newProduct: Product = await createObject(ProductModel, productAsNew);

  const result: Response = {
    message: constantMessageValue.new_product_created,
    data: newProduct,
    http: constantMessageValue.created,
  };

  return result;
};
