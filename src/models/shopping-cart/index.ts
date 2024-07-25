import mongoose, { Schema } from "mongoose";
import { ShoppingCart } from "@src/types";

const ShoppingCartSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  products: [
    {
      type: String,
      ref: "Product",
    },
  ],
});

export const ShoppingCartModel = mongoose.model<ShoppingCart>(
  "ShoppingCart",
  ShoppingCartSchema,
);
