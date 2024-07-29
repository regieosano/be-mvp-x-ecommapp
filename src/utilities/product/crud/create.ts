import { Product } from "@src/types";

export const createNewProductObject: Function = async (
  candidateProduct: Product,
): Promise<Product> => {
  try {
    // object new product
    const qualifiedNewProduct = {
      ...candidateProduct,
    };

    return await qualifiedNewProduct;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
