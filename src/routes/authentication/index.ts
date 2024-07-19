import express from "express";
import { User } from "@src/types";
import composeRouter from "@src/routes/_routerDeclaration";
import { constantValuesForMessages } from "@src/values/constants";
import { setResendCodeToTrue } from "@src/services/controllers/resend-otp";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { authenticateUser } from "@src/services/controllers/authentication";
import { otpDataValidation } from "@src/validations/otpdata_validations";
import { checkJSONBodyData } from "@src/utilities/misc";
import { compareValues } from "@src/utilities/misc";

export function getAuthenticationRouters(expressRouter: express.Router) {
  const m = constantValuesForMessages();
  const authenticationRouters = composeRouter(expressRouter);

  authenticationRouters.post(
    "/users/verify-otp",
    async (req: express.Request, res: express.Response) => {
      try {
        const userOTPData = { ...checkJSONBodyData(req.body) };

        const otpCheckForValidity = otpDataValidation(userOTPData);
        const isOTPNotValid = await otpCheckForValidity();

        if (isOTPNotValid) {
          const message = isOTPNotValid;
          throw message;
        }

        const { id, otp } = userOTPData;

        const userToBeVerified: User = await findAUserByIdOrEmail({ id });

        if (!userToBeVerified) {
          throw m.user_does_not_exist;
        }

        const { message } = await authenticateUser(userToBeVerified, otp);
        if (compareValues(message, [m.otp_expired])) {
          setResendCodeToTrue(id);
          return res.status(m.expired).send(m.otp_expired);
        }
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
