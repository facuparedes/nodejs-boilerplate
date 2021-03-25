import express, { Express } from "express";

export default async function (app: Express) {
  app.use(express.json());
}
