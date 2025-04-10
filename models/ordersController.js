import { createOrder } from "../models/orderModel.js";

// Placing a new order by calling the 'createOrder' function and sending the result back as a response
export const placeOrder = async (req, res) => {
  try {
    const orderId = await createOrder(req.body);
    res.status(201).json({ message: "Order placed successfully", orderId });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Failed to place order" });
  }
};
