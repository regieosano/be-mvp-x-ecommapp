import express from "express";
import { Product } from "@src/types";
import mU from "@src/messages/constants/user";
import mH from "@src/messages/constants/http";
import mS from "@src/messages/constants/server";
import { checkJSONBodyData } from "@src/utilities/misc";
import composeRouter from "@src/routes/_routerDeclaration";
import { newInputValidationData } from "@src/utilities/misc";
import { createProduct } from "@src/services/controllers/ecommerce/product";
import { productValidation } from "@src/validations/product_validations";

export const postProduct = (function () {
  const postAProduct = composeRouter(express.Router());

  postAProduct.post(
    "/products",
    async (req: express.Request, res: express.Response) => {
      try {
        const productInfoData = { ...checkJSONBodyData(req.body) };

        const validatedProductInfoData = await newInputValidationData(
          productInfoData,
          productValidation,
        );

        const newProduct: Product = await createProduct(
          validatedProductInfoData,
        );

        res
          .status(mH.created)
          .json({ message: mU.record_created_message, product: newProduct });
      } catch (error: unknown) {
        res
          .status(mH.internal_server_error_code)
          .send(`${mS.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return postAProduct;
  })();
})();
