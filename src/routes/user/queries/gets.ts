import express from "express";
import { m } from "@src/values/constants";
import composeRouter from "@src/routes/_routerDeclaration";
import { getVerifiedUsers } from "@src/services/controllers/user";

export const getUsers = (function () {
  const getAllUsers = composeRouter(express.Router());

  getAllUsers.get(
    "/users",
    async (req: express.Request, res: express.Response) => {
      try {
        const users = await getVerifiedUsers(m.users_to_get);
        res.status(m.ok).json(users);
      } catch (error: unknown) {
        res
          .status(m.internal_server_error_code)
          .send(`${m.internal_server_message} ${error}`);
      }
    },
  );

  return (function () {
    return getAllUsers;
  })();
})();
