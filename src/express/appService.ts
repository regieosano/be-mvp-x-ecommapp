import cors from "cors";
import bodyParser from "body-parser";
import { Application } from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import mH from "@src/messages/constants/http";
import mO from "@src/messages/constants/others";
import mS from "@src/messages/constants/server";
import { routesArray } from "@src/routes/_routerArrays";

export default async (app: Application) => {
  app.use(
    cors({
      credentials: true,
    }),
  );

  app.use(compression());
  app.use(bodyParser.json());
  app.use(cookieParser());

  // declare routes
  app.use(mO.main_prefix, routesArray);

  // catch-all routes
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
