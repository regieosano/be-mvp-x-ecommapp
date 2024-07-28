import { v4 as uuidv4 } from "uuid";
import { Product } from "@src/types";

export const createNewProductObject: Function = async (
  candidateProduct: Product,
): Promise<Product> => {
  try {
    // create product id
    const newProductId = uuidv4();

    // object new product
    const qualifiedNewProduct = {
      ...candidateProduct,
      id: newProductId,
    };

    return await qualifiedNewProduct;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
