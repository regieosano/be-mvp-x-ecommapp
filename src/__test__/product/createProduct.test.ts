import dotenv from "dotenv";
import mongoose from "mongoose";
import supertest from "supertest";
import { Product } from "@src/types";
import { isEntityFound } from "@src/functions";
import { ProductModel } from "@src/models/product";
import { findEntity } from "@src/utilities/misc/find";
import { getTestDataForCreateNewProduct } from "@src/__test__/helper/product";
import { getTestServer, mongoMemoryServerUri } from "@src/__test__/helper";

dotenv.config();

describe("product", () => {
  const productPayload = getTestDataForCreateNewProduct();

  beforeAll(async () => {
    const uri = await mongoMemoryServerUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  describe("check uniqueness of product name", () => {
    it("should ensure that product name is unique", async () => {
      const productToFind: Product = await findEntity(ProductModel, {
        name: productPayload.name,
      });
      const isUnique = isEntityFound(productToFind);
      expect(isUnique).toBeFalsy();
    });
  });

  describe("create new product", () => {
    it("should return the message that product was created", async () => {
      const serverApp = await getTestServer();

      const result = await supertest(serverApp)
        .post("/api/products/")
        .send(productPayload);
      expect(result.body["message"]).toEqual("A new product created");
    });
  });
});
