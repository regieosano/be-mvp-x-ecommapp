import express from "express";
import httpVerb from "@src/routes/_routerDeclaration";
import constantMessageValue from "@src/constants/stringnummisc";

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
          res.status(constantMessageValue.ok).json(records);
        } catch (error: unknown) {
          res
            .status(constantMessageValue.internal_server_error_code)
            .send(`${constantMessageValue.internal_server_message} ${error}`);
        }
      },
    );
  })();
};
