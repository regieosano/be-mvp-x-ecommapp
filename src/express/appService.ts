import express, { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import { getUserRouters } from "@src/routes/user";
import { getResendOTPRouters } from "@src/routes/resend-otp";
import { getAuthenticationRouters } from "@src/routes/authentication";

export default async (app: Application) => {
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
  // Initialized Routes
  const routersUser = userRoutes();
  const routersAuthentication = authenticationRoutes();
  const routersOTPResend = otpResendRoutes();
  // Declare Routes
  app.use("/api", routersUser);
  app.use("/api", routersAuthentication);
  app.use("/api", routersOTPResend);

  // Catch-All Routes
  app.get("/", (req, res) => {
    res.status(200).send("BE APIs");
  });

  app.all("*", (req, res) => {
    res.status(404).send("Endpoint does not EXIST!");
  });

  app.use((req, res) => {
    res.status(500).send("Something went wrong!");
  });

  // Routes Declaration

  return app;
};
