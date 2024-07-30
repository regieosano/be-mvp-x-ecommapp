const m = (function () {
  // Product Messages
  const NO_PRODUCTS = 500;
  const PRODUCT = "product";
  const PRODUCT_URL = "/products";
  const MIN_PRODUCT_ID_LENGTH = 20;
  const NEW_PRODUCT_CREATED = "A new product created";
  const PRODUCT_NAME_EXIST = "Product name already exist";

  return (function () {
    return {
      product: PRODUCT,
      product_url: PRODUCT_URL,
      no_products: NO_PRODUCTS,
      product_name_exist: PRODUCT_NAME_EXIST,
      new_product_created: NEW_PRODUCT_CREATED,
      min_product_id_length: MIN_PRODUCT_ID_LENGTH,
    };
  })();
})();

export default m;
