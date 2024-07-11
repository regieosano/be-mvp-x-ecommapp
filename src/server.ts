import express from "express";
import http from "http";
import App from "@src/express/appService";
import dotenv from "dotenv";
import { SERVER_RUNNING_MESSAGE } from "@src/messages/constants";
import { sendMail } from "@src/services/email";
import {
  SUBJECT_CONTENT,
  TEXT_CONTENT,
  HTML_CONTENT,
} from "@src/services/email/content";

dotenv.config();

const StartServer = async (server_status_message: string) => {
  const PORT = process.env.PORT || process.env.SERVER_PORT;
  const app = express();

  const serverApp = await App(app);

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`${server_status_message} ${PORT}`);
  });

  return serverApp;
};

const runningServer = StartServer(SERVER_RUNNING_MESSAGE);

const emailVerifyOTPBody = {
  emailSentTo: "regie30developer@gmail.com",
  emailSubject: SUBJECT_CONTENT,
  emailText: TEXT_CONTENT,
  emailHTML: HTML_CONTENT,
};

sendMail(emailVerifyOTPBody);

runningServer
  .then(() => {
    console.log("\n");
    console.log("System status...");
  })
  .catch(err => {
    console.log(err);
  });
