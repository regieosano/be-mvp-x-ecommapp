import { Product } from "@src/types";
import { ProductModel } from "@src/models/product";

export const getApprovedProducts: Function = async (
  noOfProducts: number,
): Promise<Product[] | null> => {
  try {
    const approvedProducts = await ProductModel.find().limit(noOfProducts);
    return approvedProducts;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
