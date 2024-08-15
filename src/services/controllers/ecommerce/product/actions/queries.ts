import { ProductList } from "@src/types";
import { ProductModel } from "@src/models/product";
import messageValue from "@src/messages/messagevalues";
import { readAllObjects } from "@src/utilities/crudFactory/read";

export const getApprovedProducts: Function = async (
  noOfProducts: number,
): Promise<ProductList> => {
  try {
    const products: ProductList = await readAllObjects(() =>
      ProductModel.find({ isApproved: messageValue.yes }).limit(noOfProducts),
    );

    return products;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
