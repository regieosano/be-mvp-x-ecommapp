import { v4 as uuidv4 } from "uuid";
import { Product } from "@src/types";

export const createNewProductObject: Function = async (
  candidateProduct: Product,
): Promise<Product> => {
  try {
    // Create user id by means of uuid library
    const newProductId = uuidv4();

    // Store the new product
    const qualifiedNewProduct = {
      ...candidateProduct,
      id: newProductId,
    };

    return await qualifiedNewProduct;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
