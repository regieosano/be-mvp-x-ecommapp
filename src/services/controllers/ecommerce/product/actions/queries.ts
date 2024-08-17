import { ProductList } from "@src/types";
import { ProductModel } from "@src/models/product";
import constantMessageValue from "@src/constants/stringnummisc";
import { readAllObjects } from "@src/utilities/crudFactory/read";

export const getApprovedProducts: Function = async (
  noOfProducts: number,
): Promise<ProductList> => {
  const products: ProductList = await readAllObjects(() =>
    ProductModel.find({ isApproved: constantMessageValue.yes }).limit(
      noOfProducts,
    ),
  );

  return products;
};
