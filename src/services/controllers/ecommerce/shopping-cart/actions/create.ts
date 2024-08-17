import { UserModel } from "@src/models/user";
import { findEntity } from "@src/utilities/misc/find";
import { User, Response, ShoppingCart } from "@src/types";
import { ShoppingCartModel } from "@src/models/shopping-cart";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { isEntityFound, storeValueOf } from "@src/functions";
import { createObject } from "@src/utilities/crudFactory/create";
import constantMessageValue from "@src/constants/stringnummisc";

export const createShoppingCart: Function = async (
  shoppingCart: ShoppingCart,
): Promise<Response> => {
  const shoppingCartCandidate = Object.assign({}, Object.freeze(shoppingCart));
  const { shopper } = shoppingCartCandidate;
  const _id = shopper;

  const userShopper: User = await findEntity(UserModel, {
    _id,
  });

  isEntityFound(userShopper)
    ? storeValueOf(userShopper)
    : returnCheckMessage(
        userShopper,
        constantMessageValue.shopping_user_id_does_not_exist,
      );

  const newShoppingCart: ShoppingCart = await createObject(
    ShoppingCartModel,
    shoppingCartCandidate,
  );

  const result: Response = {
    message: constantMessageValue.new_shopping_cart_created,
    data: newShoppingCart,
    http: constantMessageValue.created,
  };

  return result;
};
