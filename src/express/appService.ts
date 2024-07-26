import { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import { routesArray } from "@src/routes/_routerArrays";
import cors from "cors";
import mO from "@src/messages/constants/others";
import mH from "@src/messages/constants/http";
import mS from "@src/messages/constants/server";

export default async (app: Application) => {
  app.use(
    cors({
      credentials: true,
    }),
  );

  app.use(compression());
  app.use(bodyParser.json());
  app.use(cookieParser());

  // Declare Routes
  app.use(mO.main_prefix, routesArray);

  // Catch-All Routes
  app.get("/", (req, res) => {
    res.status(mH.ok).send(mS.api_root_response);
  });

  app.all("*", (req, res) => {
    res.status(mH.not_found).send(mS.non_existing_endpoint);
  });

  app.use((req, res) => {
    res.status(mH.internal_server_error_code).send(mS.something_went_wrong);
  });

  return app;
};
