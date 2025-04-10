import express from 'express';
import { getAllProducts, createNewProduct, deleteProductById, getProductsByCategory } from '../controller/productController.js'; // Adjust path based on your folder structure

const router = express.Router();
router.get('/', getAllProducts);

// Route for creating a new product
router.post('/products', createNewProduct);
router.get('/category/:category', getProductsByCategory);


// Route for deleting a product by ID
router.delete('/products/:id', deleteProductById);

export default router;
