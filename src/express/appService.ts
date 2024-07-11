import { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

export default async (app: Application) => {
  app.use(
    cors({
      credentials: true,
    }),
  );

  app.use(compression());
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.get("/", (req, res) => {
    res.send("Teemate APIs");
  });

  // Routes Declaration

  return app;
};
