import express from "express";
import http from "http";
import App from "@src/express/appService";
import dotenv from "dotenv";
import { sendMail } from "@src/services/email";

dotenv.config();

const PORT = process.env.PORT || process.env.SERVER_PORT;

const StartServer = async () => {
  const app = express();

  await App(app);

  const server = http.createServer(app);

  // sendMail("regie30developer@gmail.com");

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

StartServer.call("Server is CALLED!");
