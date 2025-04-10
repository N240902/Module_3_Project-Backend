import { db } from "../config/config.js";

// Creating a new booking and insert the details into the 'bookings' table
export const createBooking = async (
  fullName,
  email,
  bookingDate,
  bookingTime,
  stylist,
  specialRequest
) => {
  const [rows] = await db.execute(
    "INSERT INTO bookings (full_name, email, booking_date, booking_time, stylist, special_request) VALUES (?, ?, ?, ?, ?, ?)",
    [fullName, email, bookingDate, bookingTime, stylist, specialRequest]
  );
  return rows;
};

// Getting all bookings from the 'bookings' table
export const getBookings = async () => {
  const [rows] = await db.execute("SELECT * FROM bookings");
  return rows;
};
