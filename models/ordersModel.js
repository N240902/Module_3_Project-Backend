import db from "../config/db.js";

// Creating a new order by inserting the order details and order items into the database
export const createOrder = async (orderData) => {
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
  } = orderData;

  const connection = await db.getConnection();
  try {
    await connection.beginTransaction();

    // Insert order
    const [orderResult] = await connection.query(
      `INSERT INTO orders (customer_name, email, phone, address, city, state, zip, country, card_number, expiry_date, cvv, total_amount)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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

    const orderId = orderResult.insertId;

    // Insert each order item into the 'order_items' table and update product stock
    for (const item of items) {
      await connection.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price)
         VALUES (?, ?, ?, ?)`,
        [orderId, item.id, item.quantity, item.price]
      );

      // Update product stock
      await connection.query(
        `UPDATE products SET stock = stock - ? WHERE id = ?`,
        [item.quantity, item.id]
      );
    }

    await connection.commit();
    return orderId;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};
