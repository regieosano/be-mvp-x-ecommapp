import express from "express";
import composeRouter from "@src/routes/_routerDeclaration";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { checkJSONBodyData, returnCheckMessage } from "@src/utilities/misc";
import { sendResetOTPEmail } from "@src/services/controllers/resend-otp";
import { m } from "@src/values/constants";
import not from "@src/utilities/misc";

export const postResendOTP = function () {
  const postResendAnOTP = composeRouter(express.Router());

  postResendAnOTP.post(
    `${m.api_prefix}/resend-otp`,
    async (req: express.Request, res: express.Response) => {
      try {
        const userId = { ...checkJSONBodyData(req.body) };

        const { id } = userId;
        const user = await findAUserByIdOrEmail({ id });

        // User exist?
        not(user) ? returnCheckMessage(m.user_does_not_exist) : m.null;

        const { isVerified, isResendCode } = user;

        // User otp resend?
        isVerified
          ? returnCheckMessage(m.user_is_verified)
          : not(isResendCode)
            ? returnCheckMessage(m.user_is_not_for_otp_resend)
            : m.null;

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
    return postResendAnOTP;
  };
};
