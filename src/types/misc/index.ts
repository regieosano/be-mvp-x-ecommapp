import mongoose from "mongoose";

export type ObjectList = Object[] | null;
export type ModelObject = mongoose.Model<typeof Object>;

export type Response = {
  message: string;
  data: object;
  http: number;
};

export type KeySearchObject = {
  _id: string;
  otherField: string;
};

export type ObjArgsType = {
  _id: string;
  model: ModelObject;
  objectFields: object;
};
