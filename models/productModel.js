import {db} from "../config/config.js";

// Getting all the products
export const getProducts = async () => {
    let [data, first] = await db.query('SELECT * FROM products');
    return data;
};


// Creating a new product
export const createProduct = async (product) => {
  const { name, price, sale, salePrice, image, category, serial_number, stock_quantity, reviews_rating, reviews_count, description } = product;

  
const [data] = await db.query(
      'INSERT INTO products (name, price, sale, salePrice, image, category, serial_number, stock_quantity, reviews_rating, reviews_count, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [name, price, sale, salePrice, image, category, serial_number, stock_quantity, reviews_rating, reviews_count, description]
  );
  return data; 
};

// Deleting product by id
export const deleteProduct = async (id) => {
    const [data] = await db.query(
        'DELETE FROM products WHERE id = ?',
        [id]
    );
    return await data;
};

