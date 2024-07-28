import express from "express";
import mH from "@src/messages/constants/http";
import mS from "@src/messages/constants/server";
import httpVerb from "@src/routes/_routerDeclaration";

export const getRouteFactory = function (
  urlString: string,
  noOfRecords: number,
  routeFunc: Function,
) {
  return (function () {
    return httpVerb.get(
      urlString,
      async (req: express.Request, res: express.Response) => {
        try {
          const records = await routeFunc(noOfRecords);
          res.status(mH.ok).json(records);
        } catch (error: unknown) {
          res
            .status(mH.internal_server_error_code)
            .send(`${mS.internal_server_message} ${error}`);
        }
      },
    );
  })();
};
