import express from "express";
import composeRouter from "@src/routes/router_declaration";
import {
  OK,
  INTERNAL_SERVER_ERROR_CODE,
  INTERNAL_SERVER_MESSAGE,
} from "@src/messages/constants";
import { userValidation } from "@src/validations/user_validations";

export function getUserRouters() {
  const userRouters = composeRouter(express.Router())();
  userRouters.get(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        res.status(OK).send("Test");
      } catch (error: unknown) {
        res
          .status(INTERNAL_SERVER_ERROR_CODE)
          .send(INTERNAL_SERVER_MESSAGE + error);
      }
    },
  );

  userRouters.post(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        let userInfoData;
        try {
          userInfoData = { ...JSON.parse(JSON.stringify(req.body)) };
        } catch (error: any) {
          throw new Error(error);
        }

        const callUserValidate = userValidation(userInfoData);
        const isResultError = await callUserValidate();
        if (isResultError) {
          const message = isResultError.error;
          throw new Error(message);
        }

        res.status(200).send("Ok");
      } catch (error: unknown) {
        res
          .status(INTERNAL_SERVER_ERROR_CODE)
          .send(INTERNAL_SERVER_MESSAGE + error);
      }
    },
  );

  return function () {
    return userRouters;
  };
}
