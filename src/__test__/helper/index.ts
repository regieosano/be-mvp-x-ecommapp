import express from "express";
import App from "@src/express/appService";
import { MongoMemoryServer } from "mongodb-memory-server";

export const getTestServer = async function () {
  const app = express();
  const serverApp = await App(app);

  return (function () {
    return serverApp;
  })();
};

export const mongoMemoryServerUri = async function () {
  const mongoServer = await MongoMemoryServer.create();
  return (function () {
    return mongoServer.getUri();
  })();
};
