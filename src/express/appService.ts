import express, { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { getUsers, postUser } from "@src/routes/user";
import { postAuthUser } from "@src/routes/authentication";

import { getProductRouters } from "@src/routes/ecommerce/product";
import { getResendOTPRouters } from "@src/routes/resend-otp";

import { getSendOTPEmailToUserRouters } from "@src/routes/sendemail";
import { m } from "@src/values/constants";

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

  const productRoutes = getProductRouters(expressRouter);

  const otpResendRoutes = getResendOTPRouters(expressRouter);
  const sendOTPEmailRoutes = getSendOTPEmailToUserRouters(expressRouter);

  // Initialized Routes

  const routersProduct = productRoutes();

  const routersOTPResend = otpResendRoutes();
  const routersOTPEmailSend = sendOTPEmailRoutes();

  // Declare Routes
  app.use(m.main_prefix, getUsers);
  app.use(m.main_prefix, postUser);
  app.use(m.main_prefix, postAuthUser);

  app.use(m.main_prefix, routersProduct);

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
