import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async function (app: any) {
  await expressLoader(app);
  await mongooseLoader();
}
