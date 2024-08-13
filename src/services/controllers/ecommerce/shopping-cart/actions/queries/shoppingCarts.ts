import { ShoppingCartList } from "@src/types";
import { shoppingFindCartsDeclaration } from "@src/utilities/ecommerce/shopping-cart";

export const getShoppingCarts: Function = async (
  noOfShoppingCarts: number,
  _id: undefined,
): Promise<ShoppingCartList> => {
  const shoppingCarts: ShoppingCartList = await shoppingFindCartsDeclaration(
    noOfShoppingCarts,
    _id,
  );

  return shoppingCarts;
};
