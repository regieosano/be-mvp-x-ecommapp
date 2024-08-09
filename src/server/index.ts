import http from "http";
import dotenv from "dotenv";
import express from "express";
import App from "@src/express/appService";
import mS from "@src/messages/constants/server";
import { connectToDB } from "@src//db/connection";
import mD from "@src/messages/constants/database";

dotenv.config();

const StartServer = async (server_status_message: string) => {
  const PORT = process.env.PORT || process.env.SERVER_PORT;
  const app = express();

  const serverApp = await App(app);

  try {
    connectToDB(mD.db_is_toconnect);
  } catch (error: any) {
    throw new Error(error);
  }

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log("\x1b[36m%s\x1b[0m", `${server_status_message} ${PORT}`);
  });

  return serverApp;
};

(async function runServerRun() {
  try {
    await StartServer(mS.server_running_message);
    console.log();
    console.log("System status...");
    console.log();
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
