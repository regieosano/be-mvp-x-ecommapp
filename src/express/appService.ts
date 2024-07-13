import { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import { getUserRouters } from "@src/routes/user";

export default async (app: Application) => {
  app.use(
    cors({
      credentials: true,
    }),
  );

  app.use(compression());
  app.use(bodyParser.json());
  app.use(cookieParser());

  const userRoutes = getUserRouters();
  const routers = userRoutes();

  app.use("/api", routers);

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
