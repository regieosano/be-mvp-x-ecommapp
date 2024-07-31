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
  userId: ShopperId,
) {
  const objectId = userId ? { _id: userId } : {};
  return (async function () {
    return await ShoppingCartModel.find(objectId)
      .populate(populateShopperDeclarations())
      .populate(populateProductDeclarations())
      .limit(noOfShoppingCarts);
  })();
};
