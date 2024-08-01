import { Product } from "@src/types";
import mongoose, { Schema } from "mongoose";
import { entityProperties } from "@src/models/product/entityFields";
import { applicationProperties } from "@src/models/product/applicationFields";

const ProductSchema = new Schema({
  ...entityProperties,
  ...applicationProperties,
});

export const ProductModel = mongoose.model<Product>("Product", ProductSchema);
