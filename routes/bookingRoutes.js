import express from "express";
import { addBooking, listBookings } from "../controller/bookingController.js";

const router = express.Router();

// POST request to create a new booking
router.post("/bookings", addBooking);

// GET request to list all bookings
router.get("/bookings", listBookings);

export default router;
