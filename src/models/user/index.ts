import { User } from "@src/types";
import mongoose, { Schema } from "mongoose";
import { entityProperties } from "@src/models/user/entityFields";
import { applicationProperties } from "@src/models/user/applicationFields";

const UserSchema = new Schema({
  ...entityProperties,
  ...applicationProperties,
});

export const UserModel = mongoose.model<User>("User", UserSchema);
