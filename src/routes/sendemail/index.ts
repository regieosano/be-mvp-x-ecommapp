import express from "express";
import composeRouter from "@src/routes/_routerDeclaration";
import { checkJSONBodyData, returnCheckMessage } from "@src/utilities/misc";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { m } from "@src/values/constants";
import not from "@src/utilities/misc";

export const postSendOTPEmail = (function () {
  const sendAnOTPEmail = composeRouter(express.Router());

  sendAnOTPEmail.post(
    `${m.api_prefix}/send-otp-email`,
    async (req: express.Request, res: express.Response) => {
      try {
        const userData = { ...checkJSONBodyData(req.body) };

        const { email, otp } = userData;

        const user = await findAUserByIdOrEmail({ email });

        not(user) ? returnCheckMessage(m.user_does_not_exist) : m.null;

        //  Send OTP Verification Email
        const result = await createInstanceEmailBodyAndSendMail(email, otp);
        console.log(result);
        res.send({ message: result });
      } catch (error: unknown) {
        res
          .status(m.internal_server_error_code)
          .send(`${m.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return sendAnOTPEmail;
  })();
})();
