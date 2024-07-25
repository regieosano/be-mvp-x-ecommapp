import express from "express";
import { m } from "@src/values/constants";
import { Product } from "@src/types";
import { checkJSONBodyData } from "@src/utilities/misc";
import { newInputValidationData } from "@src/utilities/misc";
import { productValidation } from "@src/validations/product_validations";
import { createProduct } from "@src/services/controllers/product";
import composeRouter from "@src/routes/_routerDeclaration";

export function getProductRouters(expressRouter: express.Router) {
  const productRouters = composeRouter(expressRouter);

  productRouters.post(
    "/products",
    async (req: express.Request, res: express.Response) => {
      try {
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
            .status(m.created)
            .json({ message: m.record_created_message, product: newProduct });
        } catch (error: unknown) {
          throw `${error}`;
        }
      } catch (error: unknown) {
        res
          .status(m.internal_server_error_code)
          .send(`${m.internal_server_message} ${error}`);
      }
    },
  );

  return function () {
    return productRouters;
  };
}
