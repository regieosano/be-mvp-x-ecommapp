import cors from "cors";
import { Application } from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import { routesArray } from "@src/routes/_routerArrays";
import constantMessageValue from "@src/constants/stringnummisc";

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
  app.use(constantMessageValue.main_prefix, routesArray);

  // catch-all routes
  app.get(constantMessageValue.api_main_slash, (req, res) => {
    res
      .status(constantMessageValue.ok)
      .send(constantMessageValue.api_root_response);
  });

  app.all(constantMessageValue.api_all, (req, res) => {
    res
      .status(constantMessageValue.not_found)
      .send(constantMessageValue.non_existing_endpoint);
  });

  app.use((req, res) => {
    res
      .status(constantMessageValue.internal_server_error_code)
      .send(constantMessageValue.something_went_wrong);
  });

  return app;
};
