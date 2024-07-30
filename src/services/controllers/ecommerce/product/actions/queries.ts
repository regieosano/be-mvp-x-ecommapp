import { ProductList } from "@src/types";
import mO from "@src/messages/constants/others";
import { ProductModel } from "@src/models/product";

export const getApprovedProducts: Function = async (
  noOfProducts: number,
): Promise<ProductList> => {
  try {
    const approvedProducts: ProductList = await ProductModel.find({
      isApproved: mO.yes,
    }).limit(noOfProducts);

    return approvedProducts;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
