import mongoose, { Schema } from "mongoose";
import { User } from "@src/types";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  cellNumber: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  isVerified: {
    type: Boolean,
    required: false,
    default: false,
  },
  isResendCode: {
    type: Boolean,
    required: false,
    default: false,
  },
  otp: {
    type: String,
    required: false,
  },
  expiresAt: {
    type: Number,
    required: false,
  },
});

export const UserModel = mongoose.model<User>("User", UserSchema);
