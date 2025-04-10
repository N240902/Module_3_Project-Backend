import { getBookings, getBooking, removeBooking } from "../controller/adminBookingController.js";
import express from "express";

const router = express.Router();

router.get("/", getBookings);
router.get("/:id", getBooking);
router.delete("/", removeBooking);

export default router;