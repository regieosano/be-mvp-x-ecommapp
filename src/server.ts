import express from "express";
import http from "http";
import App from "@src/express/appService";
import dotenv from "dotenv";
import { connectToDB } from "@src//db/connection";
import { m } from "@src/values/constants";

dotenv.config();

const StartServer = async (server_status_message: string) => {
  const PORT = process.env.PORT || process.env.SERVER_PORT;
  const app = express();

  const serverApp = await App(app);

  try {
    connectToDB(m.db_is_toconnect);
  } catch (error: any) {
    throw new Error(error);
  }

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`${server_status_message} ${PORT}`);
  });

  return serverApp;
};

(async function runServerRun() {
  try {
    await StartServer(m.server_running_message);
    console.log("\n System status...");
  } catch (error: unknown) {
    throw error;
  }

  process.on("uncaughtException", function (error) {
    console.error(
      new Date().toUTCString() + " uncaughtException:",
      error.message,
    );
    console.error(error.stack);
    process.exit(1);
  });
})();
