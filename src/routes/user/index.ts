import express from "express";
import composeRouter from "@src/routes/_router_declaration";
import { constantValuesForMessages } from "@src/values/constants";
import { User } from "@src/types";
import { userValidation } from "@src/validations/user_validations";
import { checkJSONBodyData } from "@src/utilities/misc";
import { createUser, getUsers } from "@src/services/controllers/user";

export function getUserRouters(expressRouter: express.Router) {
  const getConstantValuesMessages = constantValuesForMessages();
  const m = getConstantValuesMessages();
  const userRouters = composeRouter(expressRouter)();

  userRouters.get(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        const users = await getUsers(500);
        res.status(m.ok).json(users);
      } catch (error: unknown) {
        res
          .status(m.internal_server_error_code)
          .send(`${m.internal_server_message} ${error}`);
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
            .status(m.created)
            .json({ message: m.record_created_message, user: newUser });
        } catch (error: unknown) {
          throw `${error}`;
        }
      } catch (error: unknown) {
        res
          .status(m.internal_server_error_code)
          .send(`${m.internal_server_message} ${error}`);
      }
    },
  );

  return function () {
    return userRouters;
  };
}
