import express from "express";
import configureServer from "./loaders";
const app = express();

(async () => {
  await configureServer(app);

  app.listen(3000, () => console.log("Server ready on port 3000"));
})();
