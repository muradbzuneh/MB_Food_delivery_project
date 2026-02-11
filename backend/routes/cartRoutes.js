import cartController from "../controller/cartController.js";
import express from "express";
import authMiddleware from "../middleware/automiddleware.js";

const router = express.Router();

router.get('/', authMiddleware, cartController.getCart);
router.post('/add', authMiddleware, cartController.addToCart);
router.post('/remove', authMiddleware, cartController.removeFromCart);
router.post('/clear', authMiddleware, cartController.clearCart);
router.post('/checkout', authMiddleware, cartController.checkout);

export default router;