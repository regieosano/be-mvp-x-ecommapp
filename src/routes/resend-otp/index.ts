import express from "express";
import composeRouter from "@src/routes/_routerDeclaration";
import { findAUser } from "@src/utilities/user";
import { sendResetOTPEmail } from "@src/services/controllers/resend-otp";
import { constantValuesForMessages } from "@src/values/constants";

export function getResendOTPRouters(expressRouter: express.Router) {
  const m = constantValuesForMessages();
  const resendOTPRouters = composeRouter(expressRouter);

  resendOTPRouters.post(
    "/users/resend-otp",
    async (req: express.Request, res: express.Response) => {
      try {
        const { id } = req.body;
        const user = await findAUser(id);
        const { isVerified, isResendCode } = user;

        /* Check if user was verified already
	       -> then return bec. verified already */
        if (isVerified) {
          throw m.user_is_verified;
        }

        /* Check if user is for resend code
	       -> then return bec. it is NOT */
        if (!isResendCode) {
          throw m.user_is_not_for_otp_resend;
        }

        await sendResetOTPEmail(user);
        res.send({ message: m.user_otp_resend_done });
      } catch (error: unknown) {
        res
          .status(m.internal_server_error_code)
          .send(`${m.internal_server_message} ${error}`);
      }
    },
  );

  return function () {
    return resendOTPRouters;
  };
}
