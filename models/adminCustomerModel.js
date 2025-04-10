import {db} from '../config/config.js';

// Customer class to manage user-related database operations
class Customer {
  // Getting all customers from the 'users' table
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }

  // Getting a specific customer by their user ID
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE user_id = ?', [id]);
    return rows[0];
  }

  // Creating a new customer and insert their data into the 'users' table
  static async create(customer) {
    const { first_name, last_name, email, phone, address } = customer;
    const [result] = await db.query(
      'INSERT INTO users (first_name, last_name, email, phone, address) VALUES (?, ?, ?, ?, ?)',
      [first_name, last_name, email, phone, address]
    );
    return result.insertId; // Return the inserted customer's ID
  }

  // Updating an existing customer's information in the 'users' table
  static async update(id, customer) {
    const { first_name, last_name, email, phone, address } = customer;
    await db.query(
      'UPDATE users SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ? WHERE user_id = ?',
      [first_name, last_name, email, phone, address, id]
    );
  }

  // Deleting a customer from the 'users' table by their user ID
  static async delete(id) {
    await db.query('DELETE FROM users WHERE user_id = ?', [id]);
  }
}

// Exporting the Customer class for use in other files
export default Customer;
