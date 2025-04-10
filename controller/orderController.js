import { db } from "../config/config.js";

// Controller placing Product orders
export const placeOrder = async (req, res) => {
  const {
    customer_name,
    email,
    phone,
    address,
    city,
    state,
    zip,
    country,
    card_number,
    expiry_date,
    cvv,
    total_amount,
    items,
  } = req.body;

  try {
    console.log("reached", req.body);

    // Insert the order into the `orders` table
    const [orderResult] = await db.query(
      "INSERT INTO orders (customer_name, email, phone, address, city, state, zip, country, card_number, expiry_date, cvv, total_amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        customer_name,
        email,
        phone,
        address,
        city,
        state,
        zip,
        country,
        card_number,
        expiry_date,
        cvv,
        total_amount,
      ]
    );

    // Retrieve the order ID of the newly inserted order
    const orderId = orderResult.insertId;
    
    for (const item of items) {
      await db.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price)
         VALUES (?, ?, ?, ?)`,
        [orderId, item.id, item.quantity, item.price]
      );
      console.log(item);
      // Updating the stock quantity in the `products` table 
      await db.query(
        `UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?`,
        [item.quantity, item.id]
      );
    }

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Failed to place order" });
  }
};
