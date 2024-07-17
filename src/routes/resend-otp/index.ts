import express from "express";
import composeRouter from "@src/routes/_routerDeclaration";
import { constantValuesForMessages } from "@src/values/constants";

export function getResendOTPRouters(expressRouter: express.Router) {
  const m = constantValuesForMessages();
  const resendOTPRouters = composeRouter(expressRouter)();
}
