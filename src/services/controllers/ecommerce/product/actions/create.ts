import { Product, Response } from "@src/types";
import { isEntityFound } from "@src/functions";
import { ProductModel } from "@src/models/product";
import { findEntity } from "@src/utilities/misc/find";
import constantMessageValue from "@src/constants/stringnummisc";
import { createObject } from "@src/utilities/crudFactory/create";
import { returnResultAsChecked } from "@src/utilities/misc/check";

export const createProduct: Function = async (
  product: Product,
): Promise<Response> => {
  let result: Response;
  const _product = Object.assign({}, Object.freeze(product));

  if (isEntityFound(await findEntity(ProductModel, { name: _product.name }))) {
    result = returnResultAsChecked(
      _product,
      constantMessageValue.product_name_exist,
    );
  } else {
    const newProduct: Product = await createObject(ProductModel, _product);

    result = {
      message: constantMessageValue.new_product_created,
      data: newProduct,
      http: constantMessageValue.created,
    };
  }

  return result;
};
