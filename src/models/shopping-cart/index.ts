import mongoose, { Schema } from "mongoose";
import { ShoppingCart } from "@src/types";

const ShoppingCartSchema = new Schema({
  shopper: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  shoppingDate: {
    type: Date,
    require: true,
    default: Date.now(),
  },
});

export const ShoppingCartModel = mongoose.model<ShoppingCart>(
  "ShoppingCart",
  ShoppingCartSchema,
);
