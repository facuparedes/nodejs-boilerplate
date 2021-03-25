import mongoose from "mongoose";
import config from "../config";

export default async function () {
  await mongoose
    .connect(config.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(`MongoDB error! ${err}`));
}
