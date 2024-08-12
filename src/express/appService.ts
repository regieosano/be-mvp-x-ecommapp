import cors from "cors";
import { Application } from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import mH from "@src/messages/constants/http";
import mO from "@src/messages/constants/others";
import mS from "@src/messages/constants/server";
import { routesArray } from "@src/routes/_routerArrays";

const bodyParser = require("body-parser");

export default async (app: Application) => {
  app.use(
    cors({
      credentials: true,
    }),
  );

  app.use(compression());
  app.use(cookieParser());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

  // declare routes
  app.use(mO.main_prefix, routesArray);

  // catch-all routes
  app.get(mS.api_main_slash, (req, res) => {
    res.status(mH.ok).send(mS.api_root_response);
  });

  app.all(mS.api_all, (req, res) => {
    res.status(mH.not_found).send(mS.non_existing_endpoint);
  });

  app.use((req, res) => {
    res.status(mH.internal_server_error_code).send(mS.something_went_wrong);
  });

  return app;
};
