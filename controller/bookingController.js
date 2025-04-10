import { createBooking, getBookings } from "../models/bookingModel.js";

// Adding a booking
export const addBooking = async (req, res) => {
  console.log("here")
  const { fullName, email, bookingDate, bookingTime, stylist, specialRequest } =
    req.body;

  try {
    const result = await createBooking(
      fullName,
      email,
      bookingDate,
      bookingTime,
      stylist,
      specialRequest
    );
    res
      .status(201)
      .json({
        message: "Booking created successfully!",
        bookingId: result.insertId,
      });
  } catch (error) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Error creating booking", error: error.message });
  }
};

// Controller for Listing Products
export const listBookings = async (req, res) => {
  try {
    const bookings = await getBookings();
    res.status(200).json(bookings);
  } catch (error) {
    console.log(err)
    res
      .status(500)
      .json({ message: "Error fetching bookings", error: error.message });
  }
  console.log(err);
};
