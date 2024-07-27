const m = (function () {
  // Product Messages
  const PRODUCTS_TO_GET = 500;
  const PRODUCT = "product";
  const PRODUCT_URL = "/products";
  const NEW_PRODUCT_CREATED = "A new product created";

  return (function () {
    return {
      products_to_get: PRODUCTS_TO_GET,
      product: PRODUCT,
      product_url: PRODUCT_URL,
      new_product_created: NEW_PRODUCT_CREATED,
    };
  })();
})();

export default m;
