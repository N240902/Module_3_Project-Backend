import { db } from "../config/config.js";

// Get all bookings
export const getAllBookings = async () => {
    const [rows] = await db.execute("SELECT * FROM bookings ORDER BY booking_date DESC");
    return rows;
};

// Get booking by ID
export const getBookingById = async (bookingId) => {
    const [rows] = await db.execute("SELECT * FROM bookings WHERE booking_id = ?", [bookingId]);
    return rows[0];
};

// Delete booking
export const deleteBooking = async (bookingId) => {
    const [result] = await db.execute("DELETE FROM bookings WHERE booking_id = ?", [bookingId]);
    return result.affectedRows;
};