import express from "express";
import mS from "@src/messages/constants/server";
import mU from "@src/messages/constants/user";
import mH from "@src/messages/constants/http";
import composeRouter from "@src/routes/_routerDeclaration";
import { getVerifiedUsers } from "@src/services/controllers/user";

export const getUsers = (function () {
  const getAllUsers = composeRouter(express.Router());

  getAllUsers.get(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        const users = await getVerifiedUsers(mU.users_to_get);
        res.status(mH.ok).json(users);
      } catch (error: unknown) {
        res
          .status(mH.internal_server_error_code)
          .send(`${mS.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return getAllUsers;
  })();
})();
