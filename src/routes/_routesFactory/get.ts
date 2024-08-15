import express from "express";
import mS from "@src/messages/constants/server";
import httpVerb from "@src/routes/_routerDeclaration";
import messageValue from "@src/messages/messagevalues";

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
          const { _id } = req.body;
          const records = await routeFunc(noOfRecords, _id);
          res.status(messageValue.ok).json(records);
        } catch (error: unknown) {
          res
            .status(messageValue.internal_server_error_code)
            .send(`${mS.internal_server_message} ${error}`);
        }
      },
    );
  })();
};
