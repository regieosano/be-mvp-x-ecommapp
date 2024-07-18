import express from "express";
import composeRouter from "@src/routes/_routerDeclaration";
import { constantValuesForMessages } from "@src/values/constants";
import { setResendCodeToTrue } from "@src/services/controllers/resend-otp";
import { findAUser } from "@src/utilities/user";
import { authenticateUser } from "@src/services/controllers/authentication";
import { otpDataValidation } from "@src/validations/otpdata_validations";
import { checkJSONBodyData } from "@src/utilities/misc";
import { compare } from "@src/utilities/misc";

export function getAuthenticationRouters(expressRouter: express.Router) {
  const m = constantValuesForMessages();
  const authenticationRouters = composeRouter(expressRouter);

  authenticationRouters.post(
    "/users/otp-verify",
    async (req: express.Request, res: express.Response) => {
      try {
        let userOTPData;
        try {
          userOTPData = { ...checkJSONBodyData(req.body) };
        } catch (error: unknown) {
          throw `${error}`;
        }

        const callOTPDataValidate = otpDataValidation(userOTPData);
        const isResultError = await callOTPDataValidate();

        if (isResultError) {
          const message = isResultError.error;
          throw message;
        }

        try {
          const { id, otp } = userOTPData;

          const userToBeVerified = await findAUser(id);

          if (!userToBeVerified) {
            throw m.user_does_not_exist;
          }

          const { message } = await authenticateUser(userToBeVerified, otp);
          if (compare(message, [m.otp_expired])) {
            setResendCodeToTrue(id);
            return res.status(m.expired).send(m.otp_expired);
          }
          res.status(m.ok).send(message);
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
    return authenticationRouters;
  };
}
