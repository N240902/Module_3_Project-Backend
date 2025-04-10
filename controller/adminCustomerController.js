import Customer from '../models/adminCustomerModel.js';
// Controller for fetching all customers
export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.getAll();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller for fetching customers by ID
export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.getById(req.params.id);
    res.json(customer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller for creating a new customer
export const createCustomer = async (req, res) => {
  try {
    const id = await Customer.create(req.body);
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller for updating customer
export const updateCustomer = async (req, res) => {
  try {
    await Customer.update(req.params.id, req.body);
    res.status(200).json({ message: 'Customer updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller for deleting customer
export const deleteCustomer = async (req, res) => {
  try {
    await Customer.delete(req.params.id);
    res.status(200).json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
