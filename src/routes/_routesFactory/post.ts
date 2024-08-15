import express from "express";
import { equals } from "ramda";
import mS from "@src/messages/constants/server";
import httpVerb from "@src/routes/_routerDeclaration";
import messageValue from "@src/messages/messagevalues";
import { validationsObjectArray } from "@src/validations";
import { checkJSONBody } from "@src/utilities/misc/check";
import { newInputValidationData } from "@src/validations/helper";

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
            entity[messageValue.first]["validation"],
          );

          const result = await routeFunc(objectEntity);
          const { message, data, http } = result;

          res.status(http).json({ message, data });
        } catch (error: unknown) {
          res
            .status(messageValue.internal_server_error_code)
            .send(`${mS.internal_server_message} ${error}`);
        }
      },
    );
  })();
};
