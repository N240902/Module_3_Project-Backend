import express from "express";
import { placeOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/orders", placeOrder);

export default router;
