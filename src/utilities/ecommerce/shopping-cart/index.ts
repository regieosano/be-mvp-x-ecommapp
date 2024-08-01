import { ShopperId } from "@src/types";
import mS from "@src/messages/constants/shopping-cart";
import { ShoppingCartModel } from "@src/models/shopping-cart";

const populateShopperDeclarations = () => {
  return {
    path: mS.shopper_path_populate,
    select: mS.shopper_field_selection,
  };
};

const populateProductDeclarations = () => {
  return {
    path: mS.products_path_populate,
    select: mS.products_field_selection,
  };
};

export const shoppingFindCartsDeclaration = function (
  noOfShoppingCarts: number,
  _shopperId: ShopperId,
) {
  const shopperId = _shopperId ? { shopper: _shopperId } : {};
  return (async function () {
    return await ShoppingCartModel.find(shopperId)
      .populate(populateShopperDeclarations())
      .populate(populateProductDeclarations())
      .limit(noOfShoppingCarts);
  })();
};
