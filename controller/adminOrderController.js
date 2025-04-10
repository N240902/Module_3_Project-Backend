import Order from '../models/adminOrderModel.js';
// Controller for fetching orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.getAll();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Controller for deleting an order
export const deleteOrder = async (req, res) => {
  try {
                     await Order.delete(req.params.id);
    res.status(200).json({ message: 'Order deleted' });
             } catch (err) {
    res.status(500).json({ error: err.message });
  }
};