const m = (function () {
  // Shopping Cart Messages
  const SHOPPING_CART = "shopping-cart";
  const SHOPPER_PATH_POPULATE = "shopper";
  const SHOPPER_MODEL = "User";
  const PRODUCTS_MODEL = "Product";
  const PRODUCTS_PATH_POPULATE = "products";
  const SHOPPER_FIELD_SELECTION = "-_id name address";
  const PRODUCTS_FIELD_SELECTION = "-_id name category description price qty";
  const ALL_SHOPPING_CARTS_URL = "/shopping-carts";
  const A_SHOPPING_CART_URL = "/shopping-cart";
  const SHOPPING_USER_ID_DOES_NOT_EXIST = "Shopper UserID does not exist";
  const NEW_SHOPPING_CART_CREATED = "A new shopping cart created";
  const NO_PRODUCTS = 500;

  return (function () {
    return {
      no_products: NO_PRODUCTS,
      shopper_path_populate: SHOPPER_PATH_POPULATE,
      products_path_populate: PRODUCTS_PATH_POPULATE,
      shopper_model: SHOPPER_MODEL,
      products_model: PRODUCTS_MODEL,
      shopper_field_selection: SHOPPER_FIELD_SELECTION,
      products_field_selection: PRODUCTS_FIELD_SELECTION,
      new_shopping_cart_created: NEW_SHOPPING_CART_CREATED,
      shopping_user_id_does_not_exist: SHOPPING_USER_ID_DOES_NOT_EXIST,
      shopping_cart: SHOPPING_CART,
      all_shopping_carts_url: ALL_SHOPPING_CARTS_URL,
      a_shopping_cart_url: A_SHOPPING_CART_URL,
    };
  })();
})();

export default m;
