import mongoose, { Schema } from "mongoose";
import { Product } from "@src/types";

const ProductSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  category: {
    type: String,
    ref: "Category",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

export const ProductModel = mongoose.model<Product>("Product", ProductSchema);
