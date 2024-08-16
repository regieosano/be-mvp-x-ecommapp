import { ShopperId } from "@src/types";
import { ShoppingCartModel } from "@src/models/shopping-cart";
import constantMessageValue from "@src/constants/stringnummisc";

const populateShopperDeclarations = () => {
  return {
    path: constantMessageValue.shopper_path_populate,
    select: constantMessageValue.shopper_field_selection,
  };
};

const populateProductDeclarations = () => {
  return {
    path: constantMessageValue.products_path_populate,
    select: constantMessageValue.products_field_selection,
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
