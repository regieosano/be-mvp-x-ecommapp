import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const connectToDB = (isDBConnected: boolean) => {
  try {
    mongoose.Promise = Promise;
    mongoose
      .connect(
        `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}${process.env.MONGO_DB_CLUSTER_STRING}`,
      )
      .then(() => {
        isDBConnected = true;
        console.log("Database successfully connected...");
      });

    mongoose.connection.on("error", (error: any) => {
      throw new Error(error);
    });

    return isDBConnected;
  } catch (error) {
    console.log(error);
  }
};
