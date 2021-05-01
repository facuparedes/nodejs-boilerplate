import { Router } from "express";
import example from "./example";
const router = Router();

router.use("/example", example);

export default router;
