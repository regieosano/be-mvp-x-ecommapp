import _ from "lodash";
import express from "express";
import mU from "@src/messages/constants/user";
import mH from "@src/messages/constants/http";
import mS from "@src/messages/constants/server";
import { checkJSONBody } from "@src/utilities/misc";
import httpVerb from "@src/routes/_routerDeclaration";
import { newInputValidationData } from "@src/utilities/misc";
import { validationsObjectArray } from "@src/validations";

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
          const entity = _.first(
            _.filter(validationsObjectArray, e => e.entity === routeString),
          );

          const bodyData = { ...checkJSONBody(req.body) };

          const objectEntity = await newInputValidationData(
            bodyData,
            entity?.validation,
          );

          const result = await routeFunc(objectEntity);
          res.json(result);
        } catch (error: unknown) {
          res
            .status(mH.internal_server_error_code)
            .send(`${mS.internal_server_message} ${error}`);
        }
      },
    );
  })();
};
