import express from "express";
import not from "@src/utilities/misc";
import mU from "@src/messages/constants/user";
import mH from "@src/messages/constants/http";
import mO from "@src/messages/constants/others";
import mS from "@src/messages/constants/server";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import composeRouter from "@src/routes/_routerDeclaration";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";
import { checkJSONBodyData, returnCheckMessage } from "@src/utilities/misc";

export const postSendOTPEmail = (function () {
  const sendAnOTPEmail = composeRouter(express.Router());

  sendAnOTPEmail.post(
    `${mO.api_prefix}/send-otp-email`,
    async (req: express.Request, res: express.Response) => {
      try {
        const userData = { ...checkJSONBodyData(req.body) };

        const { email, otp } = userData;

        const user = await findAUserByIdOrEmail({ email });

        not(user) ? returnCheckMessage(mU.user_does_not_exist) : mO.null;

        //  Send OTP Verification Email
        const result = await createInstanceEmailBodyAndSendMail(email, otp);
        console.log(result);
        res.send({ message: result });
      } catch (error: unknown) {
        res
          .status(mH.internal_server_error_code)
          .send(`${mS.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return sendAnOTPEmail;
  })();
})();
