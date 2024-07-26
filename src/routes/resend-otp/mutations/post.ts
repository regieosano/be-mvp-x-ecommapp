import _ from "lodash";
import express from "express";
import mU from "@src/messages/constants/user";
import mH from "@src/messages/constants/http";
import mO from "@src/messages/constants/others";
import mS from "@src/messages/constants/server";
import composeRouter from "@src/routes/_routerDeclaration";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { sendResetOTPEmail } from "@src/services/controllers/resend-otp";
import { checkJSONBody, returnCheckMessage } from "@src/utilities/misc";

export const postResendOTP = (function () {
  const postResendAnOTP = composeRouter(express.Router());

  postResendAnOTP.post(
    `${mO.api_prefix}/resend-otp`,
    async (req: express.Request, res: express.Response) => {
      try {
        const userId = { ...checkJSONBody(req.body) };

        const { id } = userId;
        const user = await findAUserByIdOrEmail({ id });

        // User exist?
        _.negate(() => _.isObject(user))
          ? returnCheckMessage(mU.user_does_not_exist)
          : mO.null;

        const { isVerified, isResendCode } = user;

        // User otp resend?
        isVerified
          ? returnCheckMessage(mU.user_is_verified)
          : _.negate(() => isResendCode)
            ? returnCheckMessage(mU.user_is_not_for_otp_resend)
            : mO.null;

        await sendResetOTPEmail(user);
        res.send({ message: mU.user_otp_resend_done });
      } catch (error: unknown) {
        res
          .status(mH.internal_server_error_code)
          .send(`${mS.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return postResendAnOTP;
  })();
})();
