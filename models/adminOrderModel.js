import {db} from '../config/config.js';

// Ordering class to manage order-related database operations
class Order {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM orders');
             return rows;
  }
  // Getting a specific order by its ID from the 'orders' table
  static async getById(id) {
              const [rows] = await db.query('SELECT * FROM orders WHERE id = ?', [id]);
    return rows[0];
  }
// Deleting an order from the 'orders' table by its ID
  static async delete(id) {
    await db.query('DELETE FROM orders WHERE id = ?', [id]);
  }
}

export default Order