import * as BookingModel from "../models/adminBookingModel.js";

export const getBookings = async (req, res) => {
    try {
        const bookings = await BookingModel.getAllBookings();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error: error.message });
    }
};

export const getBooking = async (req, res) => {
    try {
        const booking = await BookingModel.getBookingById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: "Error fetching booking", error: error.message });
    }
};

export const removeBooking = async (req, res) => {
    try {
        const deleted = await BookingModel.deleteBooking(req.params.id);
        if (deleted) {
            res.status(200).json({ message: "Booking deleted successfully" });
        } else {
            res.status(404).json({ message: "Booking not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting booking", error: error.message });
    }
};