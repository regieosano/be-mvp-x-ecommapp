import express from "express";
import composeRouter from "@src/routes/router_declaration";
import {
  OK,
  INTERNAL_SERVER_ERROR_CODE,
  INTERNAL_SERVER_MESSAGE,
} from "@src/values/constants";
import { userValidation } from "@src/validations/user_validations";
import { checkJSONBodyData } from "@src/utilities/misc";
import { createUser } from "@src/services/user";

export function getUserRouters(expressRouter: express.Router) {
  const userRouters = composeRouter(expressRouter)();
  userRouters.get(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        res.status(OK).send("Test");
      } catch (error: unknown) {
        res
          .status(INTERNAL_SERVER_ERROR_CODE)
          .send(`${INTERNAL_SERVER_MESSAGE} ${error}`);
      }
    },
  );

  userRouters.post(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        let userInfoData;
        try {
          userInfoData = { ...checkJSONBodyData(req.body) };
        } catch (error: unknown) {
          res
            .status(INTERNAL_SERVER_ERROR_CODE)
            .send(`${INTERNAL_SERVER_MESSAGE} ${error}`);
        }

        const callUserValidate = userValidation(userInfoData);
        const isResultError = await callUserValidate();
        if (isResultError) {
          const message = isResultError.error;
          throw new Error(message);
        }
        try {
          await createUser(userInfoData);
          res.status(201).send("Create one (1) record");
        } catch (error: unknown) {
          throw `${error}`;
        }
      } catch (error: unknown) {
        res
          .status(INTERNAL_SERVER_ERROR_CODE)
          .send(`${INTERNAL_SERVER_MESSAGE} ${error}`);
      }
    },
  );

  return function () {
    return userRouters;
  };
}
