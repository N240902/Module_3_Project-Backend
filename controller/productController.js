import { getProducts, createProduct, deleteProduct } from '../models/productModel.js'; 
import {db} from "../config/config.js";
// Controller for getting all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products); // Respond with a list of products
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products', error: error.message });
    }
};

// Get products by category
export const getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const [products] = await db.query('SELECT * FROM products WHERE category = ?', [category]);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products', error: error.message });
    }
};
// Controller for creating a new product
export const createNewProduct = async (req, res) => {
    try {
        const newProduct = req.body; 
        const result = await createProduct(newProduct);
        res.status(201).json({ message: 'Product created successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
};


// Controller for deleting a product by ID
export const deleteProductById = async (req, res) => {
    const { id } = req.params; 

    try {
        const result = await deleteProduct(id);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};
