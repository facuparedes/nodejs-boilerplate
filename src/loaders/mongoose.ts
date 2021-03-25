import mongoose from "mongoose";

export default async function () {
  await mongoose
    .connect("<MONGODB URL>", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log(`MongoDB error! ${err}`));
}
