import mongoose, { Schema } from "mongoose";
import { Product } from "@src/types";

const ProductSchema = new Schema({
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
    default: 0,
  },
  isApproved: {
    type: Boolean,
    required: false,
    default: true,
  },
});

export const ProductModel = mongoose.model<Product>("Product", ProductSchema);
