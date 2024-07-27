const m = (function () {
  // Product Messages
  const PRODUCTS_TO_GET = 500;
  const PRODUCT = "product";
  const NEW_PRODUCT_CREATED = "A new product created";
  const API_URL = "/products";

  return (function () {
    return {
      products_to_get: PRODUCTS_TO_GET,
      product: PRODUCT,
      api_url: API_URL,
      new_product_created: NEW_PRODUCT_CREATED,
    };
  })();
})();

export default m;
