import { ProductList } from "@src/types";
import mO from "@src/messages/constants/others";
import { ProductModel } from "@src/models/product";
import { readAllObjects } from "@src/utilities/crudFactory/read";

export const getApprovedProducts: Function = async (
  noOfProducts: number,
): Promise<ProductList> => {
  try {
    const products: ProductList = await readAllObjects(() =>
      ProductModel.find({ isApproved: mO.yes }).limit(noOfProducts),
    );

    return products;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
