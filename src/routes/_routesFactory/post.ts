import express from "express";
import { equals } from "ramda";
import httpVerb from "@src/routes/_routerDeclaration";
import { validationsObjectArray } from "@src/validations";
import { checkJSONBody } from "@src/utilities/misc/check";
import { newInputValidationData } from "@src/validations/helper";
import constantMessageValue from "@src/constants/stringnummisc";

export const postRouteFactory = function (
  routeString: string,
  urlString: string,
  routeFunc: Function,
) {
  return (function () {
    return httpVerb.post(
      urlString,
      async (req: express.Request, res: express.Response) => {
        try {
          const entity = validationsObjectArray.filter(e =>
            equals(e.entity, routeString),
          );

          const bodyData = { ...checkJSONBody(req.body) };

          const objectEntity = await newInputValidationData(
            bodyData,
            entity[constantMessageValue.first]["validation"],
          );

          const result = await routeFunc(objectEntity);
          const { message, data, http } = result;

          res.status(http).json({ message, data });
        } catch (error: unknown) {
          res
            .status(constantMessageValue.internal_server_error_code)
            .send(`${constantMessageValue.internal_server_message} ${error}`);
        }
      },
    );
  })();
};
