import express, { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import { getUserRouters } from "@src/routes/user";
import { getResendOTPRouters } from "@src/routes/resend-otp";
import { getAuthenticationRouters } from "@src/routes/authentication";
import { getSendOTPEmailToUserRouters } from "@src/routes/sendemail";
import { m } from "@src/values/constants";

export default async (app: Application) => {
  // const m = constantValuesForMessages();
  const expressRouter = express.Router();

  app.use(
    cors({
      credentials: true,
    }),
  );

  app.use(compression());
  app.use(bodyParser.json());
  app.use(cookieParser());

  // Instantiate Routers
  const userRoutes = getUserRouters(expressRouter);
  const authenticationRoutes = getAuthenticationRouters(expressRouter);
  const otpResendRoutes = getResendOTPRouters(expressRouter);
  const sendOTPEmailRoutes = getSendOTPEmailToUserRouters(expressRouter);

  // Initialized Routes
  const routersUser = userRoutes();
  const routersAuthentication = authenticationRoutes();
  const routersOTPResend = otpResendRoutes();
  const routersOTPEmailSend = sendOTPEmailRoutes();

  // Declare Routes
  app.use(m.main_prefix, routersUser);
  app.use(m.main_prefix, routersAuthentication);
  app.use(m.main_prefix, routersOTPResend);
  app.use(m.main_prefix, routersOTPEmailSend);

  // Catch-All Routes
  app.get("/", (req, res) => {
    res.status(m.ok).send("BE APIs");
  });

  app.all("*", (req, res) => {
    res.status(m.not_found).send("Endpoint does not EXIST!");
  });

  app.use((req, res) => {
    res.status(m.internal_server_error_code).send("Something went wrong!");
  });

  return app;
};
