import express from "express";
import mH from "@src/messages/constants/http";
import mS from "@src/messages/constants/server";
import mP from "@src/messages/constants/product";
import composeRouter from "@src/routes/_routerDeclaration";
import { getApprovedProducts } from "@src/services/controllers/ecommerce/product/actions/queries";

export const getProducts = (function () {
  const getAllProducts = composeRouter(express.Router());

  getAllProducts.get(
    "/products",
    async (req: express.Request, res: express.Response) => {
      try {
        const products = await getApprovedProducts(mP.products_to_get);
        res.status(mH.ok).json(products);
      } catch (error: unknown) {
        res
          .status(mH.internal_server_error_code)
          .send(`${mS.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return getAllProducts;
  })();
})();
