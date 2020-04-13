import mongoose from "mongoose";
import dotenv from "dotenv";

export default () => {
  dotenv.config();

  mongoose.connect(process.env.MONGODB_URI);
}