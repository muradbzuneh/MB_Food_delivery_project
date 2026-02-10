import express from "express";
import authMiddleware from "../middleware/automiddleware.js";
import { registerAdmin } from "../controller/adminController.js";

const router = express.Router();

// 🔐 Only authenticated Firebase users can call this
router.post("/register", authMiddleware, registerAdmin);

export default router;