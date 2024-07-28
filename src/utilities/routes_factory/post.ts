import express from "express";
import mH from "@src/messages/constants/http";
import mS from "@src/messages/constants/server";
import mO from "@src/messages/constants/others";
import { checkJSONBody } from "@src/utilities/misc";
import httpVerb from "@src/routes/_routerDeclaration";
import { validationsObjectArray } from "@src/validations";
import { newInputValidationData } from "@src/utilities/misc";

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
          const entity = validationsObjectArray.filter(
            e => e.entity === routeString,
          );

          const bodyData = { ...checkJSONBody(req.body) };

          const objectEntity = await newInputValidationData(
            bodyData,
            entity[mO.first]["validation"],
          );

          const result = await routeFunc(objectEntity);
          const { message, data, http } = result;

          res.status(http).json({ message, data });
        } catch (error: unknown) {
          res
            .status(mH.internal_server_error_code)
            .send(`${mS.internal_server_message} ${error}`);
        }
      },
    );
  })();
};
