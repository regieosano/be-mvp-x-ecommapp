import express from "express";
import { User } from "@src/types";
import { m } from "@src/values/constants";
import { checkJSONBodyData } from "@src/utilities/misc";
import composeRouter from "@src/routes/_routerDeclaration";
import { newInputValidationData } from "@src/utilities/misc";
import { createUser } from "@src/services/controllers/user";
import { userValidation } from "@src/validations/user_validations";

export const postUser = (function () {
  const postAUser = composeRouter(express.Router());

  postAUser.post(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        const userInfoData = { ...checkJSONBodyData(req.body) };

        const validatedUserInfoData = await newInputValidationData(
          userInfoData,
          userValidation,
        );

        const newUser: User = await createUser(validatedUserInfoData);

        res
          .status(m.created)
          .json({ message: m.record_created_message, user: newUser });
      } catch (error: unknown) {
        res
          .status(m.internal_server_error_code)
          .send(`${m.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return postAUser;
  })();
})();
