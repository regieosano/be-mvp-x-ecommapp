import { v4 as uuidv4 } from "uuid";
import { ShoppingCart } from "@src/types";

export const createNewShoppingCartObject: Function = async (
  candidateShoppingCart: ShoppingCart,
): Promise<ShoppingCart> => {
  try {
    // create shopping cart id
    const newShoppingCartId = uuidv4();

    // object new product
    const qualifiedNewShoppingCart = {
      ...candidateShoppingCart,
      id: newShoppingCartId,
    };

    return await qualifiedNewShoppingCart;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
