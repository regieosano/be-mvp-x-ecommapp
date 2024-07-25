import { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import { routesArray } from "@src/routes/_routerArrays";
import cors from "cors";
import { m } from "@src/values/constants";

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
  app.use(m.main_prefix, routesArray);

  // Catch-All Routes
  app.get("/", (req, res) => {
    res.status(m.ok).send(m.api_root_response);
  });

  app.all("*", (req, res) => {
    res.status(m.not_found).send(m.non_exist_endpoint);
  });

  app.use((req, res) => {
    res.status(m.internal_server_error_code).send(m.swr);
  });

  return app;
};
