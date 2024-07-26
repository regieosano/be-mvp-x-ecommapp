import express from "express";
import { User } from "@src/types";
import mU from "@src/messages/constants/user";
import mH from "@src/messages/constants/http";
import mO from "@src/messages/constants/others";
import mS from "@src/messages/constants/server";
import { checkJSONBodyData } from "@src/utilities/misc";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import composeRouter from "@src/routes/_routerDeclaration";
import not, { returnCheckMessage } from "@src/utilities/misc";
import { authenticateUser } from "@src/services/controllers/authentication";
import { otpDataValidation } from "@src/validations/otpdata_validations";

export const postAuthUser = (function () {
  const postAnAuthUser = composeRouter(express.Router());

  postAnAuthUser.post(
    `${mO.api_prefix}/verify-otp`,
    async (req: express.Request, res: express.Response) => {
      try {
        const userOTPData = { ...checkJSONBodyData(req.body) };

        await otpDataValidation(userOTPData);

        const { id, otp } = userOTPData;

        const userToBeVerified: User = await findAUserByIdOrEmail({ id });

        not(userToBeVerified)
          ? returnCheckMessage(mU.user_does_not_exist)
          : mO.null;

        const { message } = await authenticateUser(userToBeVerified, otp);

        res.status(mH.ok).send(message);
      } catch (error: unknown) {
        res
          .status(mH.internal_server_error_code)
          .send(`${mS.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return postAnAuthUser;
  })();
})();
