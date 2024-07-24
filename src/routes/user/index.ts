import express from "express";
import composeRouter from "@src/routes/_routerDeclaration";
import { m } from "@src/values/constants";
import { User } from "@src/types";
import { newUserInputValidationData } from "@src/utilities/user";
import { checkJSONBodyData } from "@src/utilities/misc";
import { getVerifiedUsers, createUser } from "@src/services/controllers/user";

export function getUserRouters(expressRouter: express.Router) {
  // const m = constantValuesForMessages();
  const userRouters = composeRouter(expressRouter);

  userRouters.get(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        const users = await getVerifiedUsers(m.users_to_get);
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
        try {
          const userInfoData = { ...checkJSONBodyData(req.body) };

          const validatedUserInfoData =
            await newUserInputValidationData(userInfoData);

          const newUser: User = await createUser(validatedUserInfoData);

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
