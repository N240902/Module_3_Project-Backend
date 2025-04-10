// adminProductModel.js
import {db} from '../config/config.js'; // Use ES6 import

// Product class to manage product-related database operation
class Product {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
  }
// Getting a specific product by its ID from the 'products' table
  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  // Create a new product and insert its details into the 'products' table
  static async create(product) {
    const { name, price, description, image, category, serial_number, stock_quantity, reviews_rating, reviews_count } = product;
    const [result] = await db.query(
      'INSERT INTO products (name, price, description, image, category, serial_number, stock_quantity, reviews_rating, reviews_count) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [name, price, description, image, category, serial_number, stock_quantity, reviews_rating, reviews_count]
    );
    return result.insertId;
  }

  // Updating an existing product's information in the 'products' table
  static async update(id, product) {
    const { name, price, description, image, category, serial_number, stock_quantity, reviews_rating, reviews_count } = product;
    await db.query(
      'UPDATE products SET name = ?, price = ?, description = ?, image = ?, category = ?, serial_number = ?, stock_quantity = ?, reviews_rating = ?, reviews_count = ? WHERE id = ?',
      [name, price, description, image, category, serial_number, stock_quantity, reviews_rating, reviews_count, id]
    );
  }
  
// Deleting a product from the 'products' table by its ID
  static async delete(id) {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
  }
}

export default Product; // Use ES6 export