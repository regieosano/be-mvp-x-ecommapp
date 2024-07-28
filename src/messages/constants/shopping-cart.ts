const m = (function () {
  // Shopping Cart Messages
  const SHOPPING_CART = "shopping-cart";
  const SHOPPING_CART_URL = "/shopping-cart";
  const SHOPPING_USER_ID_DOES_NOT_EXIST = "Shopper UserID does not exist";
  const NEW_SHOPPING_CART_CREATED = "A new shopping cart created";

  return (function () {
    return {
      new_shopping_cart_created: NEW_SHOPPING_CART_CREATED,
      shopping_user_id_does_not_exist: SHOPPING_USER_ID_DOES_NOT_EXIST,
      shopping_cart: SHOPPING_CART,
      shopping_cart_url: SHOPPING_CART_URL,
    };
  })();
})();

export default m;
