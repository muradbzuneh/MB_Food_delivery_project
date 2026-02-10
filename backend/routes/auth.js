import express from "express";
import authMiddleware from "../middleware/automiddleware.js";
import { syncUser } from "../controller/authController.js";

const router = express.Router();

router.post("/sync", authMiddleware, syncUser);

export default router;