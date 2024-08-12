import dotenv from "dotenv";
import mongoose from "mongoose";
import supertest from "supertest";
import App from "@src/express/appService";
import { MongoMemoryServer } from "mongodb-memory-server";
import express from "express";

dotenv.config();

describe("product", () => {
  const SERVERTESTPORT = process.env.PORT || process.env.SERVER_TEST_PORT;

  const productPayload = {
    category: "Any Category",
    name: "Hammer and Thongs! Rattle and Hum!",
    description: "The one used in The Exorcist movie",
    price: 1507.0,
    image: "The Image",
    qty: 120,
    isAvailable: false,
  };

  const app = express();

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();

    const uri = mongoServer.getUri();

    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe("create new product", () => {
    it("should return the message that product was created", async () => {
      const serverApp = await App(app);

      serverApp.listen(SERVERTESTPORT),
        () => {
          console.log("Test Server Running...");
        };

      const result = await supertest(serverApp)
        .post("/api/products/")
        .send(productPayload);
      expect(result.body["message"]).toEqual("A new product created");
    });
  });
});
