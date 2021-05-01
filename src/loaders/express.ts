import express, { Express } from "express";
import routes from "../api";

export default async function (app: Express) {
  app.use(express.json());
  app.use("/", routes);
}
