import express from "express";
import { User } from "@src/types";
import mS from "@src/messages/constants/server";
import mU from "@src/messages/constants/user";
import mH from "@src/messages/constants/http";
import { checkJSONBody } from "@src/utilities/misc";
import composeRouter from "@src/routes/_routerDeclaration";
import { newInputValidationData } from "@src/utilities/misc";
import { createUser } from "@src/services/controllers/user";
import { userValidation } from "@src/validations/user_validations";

export const postUser = (function () {
  const postAUser = composeRouter(express.Router());

  postAUser.post(
    mU.api_url,
    async (req: express.Request, res: express.Response) => {
      try {
        const userInfoData = { ...checkJSONBody(req.body) };

        const validatedUserInfoData = await newInputValidationData(
          userInfoData,
          userValidation,
        );

        const newUser: User = await createUser(validatedUserInfoData);

        res
          .status(mH.created)
          .json({ message: mU.record_created_message, user: newUser });
      } catch (error: unknown) {
        res
          .status(mH.internal_server_error_code)
          .send(`${mS.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return postAUser;
  })();
})();
