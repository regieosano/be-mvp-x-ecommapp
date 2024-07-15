import express from "express";
import composeRouter from "@src/routes/_router_declaration";
import {
  OK,
  CREATED,
  RECORD_CREATED_MESSAGE,
  INTERNAL_SERVER_ERROR_CODE,
  INTERNAL_SERVER_MESSAGE,
} from "@src/values/constants";
import { User } from "@src/types";
import { userValidation } from "@src/validations/user_validations";
import { checkJSONBodyData } from "@src/utilities/misc";
import { createUser, getUsers } from "@src/services/controllers/user";

export function getUserRouters(expressRouter: express.Router) {
  const userRouters = composeRouter(expressRouter)();
  userRouters.get(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        const users = await getUsers(500);
        res.status(OK).json(users);
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
          throw `${error}`;
        }

        const callUserValidate = userValidation(userInfoData);
        const isResultError = await callUserValidate();
        if (isResultError) {
          const message = isResultError.error;
          throw new Error(message);
        }

        try {
          const newUser: User = await createUser(userInfoData);

          res
            .status(CREATED)
            .json({ message: RECORD_CREATED_MESSAGE, user: newUser });
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
