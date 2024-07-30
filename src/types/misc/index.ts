import mongoose from "mongoose";

export type ModelObject = mongoose.Model<typeof Object>;
export type ObjectList = Object[] | null;

export type Response = {
  message: string;
  data: object;
  http: number;
};

export type KeySearchObject = {
  _id: string;
  otherField: string;
};
