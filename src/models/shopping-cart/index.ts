import { ShoppingCart } from "@src/types";
import mongoose, { Schema } from "mongoose";
import { entityProperties } from "@src/models/shopping-cart/entityFields";
import { applicationProperties } from "@src/models/shopping-cart/applicationFields";

const ShoppingCartSchema = new Schema({
  ...entityProperties,
  ...applicationProperties,
});

export const ShoppingCartModel = mongoose.model<ShoppingCart>(
  "ShoppingCart",
  ShoppingCartSchema,
);
