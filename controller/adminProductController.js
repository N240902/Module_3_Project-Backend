// adminProductController.js
import Product from '../models/adminProductModel.js';

// Controller for fetching All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.getAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.getById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Controller for creating Products
export const createProduct = async (req, res) => {
  try {
    const id = await Product.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// Controller for updating Products
export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.params.id, req.body);
    res.status(200).json({ message: 'Product updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.delete(req.params.id);
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};