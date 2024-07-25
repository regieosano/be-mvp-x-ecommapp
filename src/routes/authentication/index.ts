import express from "express";
import { User } from "@src/types";
import composeRouter from "@src/routes/_routerDeclaration";
import { m } from "@src/values/constants";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { authenticateUser } from "@src/services/controllers/authentication";
import { otpDataValidation } from "@src/validations/otpdata_validations";
import { checkJSONBodyData } from "@src/utilities/misc";
import not, { returnCheckMessage } from "@src/utilities/misc";

export function getAuthenticationRouters(expressRouter: express.Router) {
  const authenticationRouters = composeRouter(expressRouter);

  authenticationRouters.post(
    `${m.api_prefix}/verify-otp`,
    async (req: express.Request, res: express.Response) => {
      try {
        const userOTPData = { ...checkJSONBodyData(req.body) };

        await otpDataValidation(userOTPData);

        const { id, otp } = userOTPData;

        const userToBeVerified: User = await findAUserByIdOrEmail({ id });

        not(userToBeVerified)
          ? returnCheckMessage(m.user_does_not_exist)
          : m.null;

        const { message } = await authenticateUser(userToBeVerified, otp);

        res.status(m.ok).send(message);
      } catch (error: unknown) {
        res
          .status(m.internal_server_error_code)
          .send(`${m.internal_server_message} ${error}`);
      }
    },
  );

  return function () {
    return authenticationRouters;
  };
}
