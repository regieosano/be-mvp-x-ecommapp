import { Product } from "@src/types";
import { ProductModel } from "@src/models/product";
import mO from "@src/messages/constants/others";

export const getApprovedProducts: Function = async (
  noOfProducts: number,
): Promise<Product[] | null> => {
  try {
    const approvedProducts = await ProductModel.find({
      isApproved: mO.yes,
    }).limit(noOfProducts);
    return approvedProducts;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
