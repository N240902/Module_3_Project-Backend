import express from "express";
import mysql from 'mysql2/promise'
import dotenv from "dotenv";
import {config} from 'dotenv';
import cors from "cors";
import productRoutes from "./routes/productRoute.js"; // import the products routes
import bodyParser from "body-parser";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from './routes/userRoutes.js';
import { placeOrder } from "./controller/orderController.js";
import bookingRoutes from './routes/bookingRoutes.js';
import adminProductRoutes from "./routes/adminProductRoutes.js";
import adminCustomerRoutes from "./routes/adminCustomerRoutes.js"; 
import adminOrderRoutes from "./routes/adminOrderRoutes.js";
import adminBookingRoutes from "./routes/adminBookingRoutes.js"; 

config();
const app = express();
app.use(cors({
  origin: 'http://localhost:8080', // Update if your frontend URL is different
  methods: ['GET,POST,PUT,DELETE'],
  allowedHeaders: ['Content-Type,Authorization'],
  credentials: true
}));
app.options('*', cors());


app.use(bodyParser.json());
app.use(express.json());
app.use('/api', bookingRoutes);


app.post("/api/orders", placeOrder);


app.use('/api/products', adminProductRoutes);
app.use('/api/customers', adminCustomerRoutes);
app.use('/api/orders', adminOrderRoutes);
// app.post("/api/orders", (req, res) => {
//   const orderData = req.body;
//   console.log("Received order data:", orderData);

//   // Save orderData to the database
//   // Example: Insert into orders and order_items tables 
//   res.status(200).json({ message: "Order placed successfully!" });
// });
app.use('/auth', userRoutes);
app.use('/products', productRoutes);
app.use("/api/admin/bookings", adminBookingRoutes);

// --if I add this it no longer displays products on frontend
// app.use('/api', bookingRoutes);
app.listen(3001, () => {
  console.log('Server is running at http://localhost:3001');
  console.log('Hi...');
});


app.get("/api/cart", async (req, res) => {
  try {
    
    const [cartItems] = await db.execute(`
      SELECT p.id, p.name, p.price, ci.quantity
      FROM cart_items ci
      JOIN products p ON ci.product_id = p.id
      WHERE ci.user_id = ?`, [req.user.id]); // Assuming req.user.id holds the current user's ID

    if (cartItems.length > 0) {
      console.log(cartItems);
res.status(200).json(cartItems);

    } else {
      res.status(404).json({ message: "Cart is empty or not found" });
    }
  } catch (error) {
    console.error("Error fetching cart data:", error);
    res.status(500).json({ message: "Error fetching cart data" });
  }
});


// app.use(cors({
//   origin: 'http://localhost:8080' // Allow requests only from this origin
// }));
// app.use(bodyParser.json());


// app.use("/api", productRoutes);

// app.get("/", (req, res) => {
//   res.send("The backend for basic commerce --- Created by TDL2627");
// });

// app.use(express.json());






// app.listen(3001, () => {
//   console.log('Server is running at http://localhost:3000');
//   console.log('Hi...');
// });
// app.listen(3001, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });

// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
