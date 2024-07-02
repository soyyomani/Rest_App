// server/controllers/orderController.js
const Order = require('../models/Order');

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('items.menuItem');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createOrder = async (req, res) => {
  const { tableNumber, items, totalAmount } = req.body;
  try {
    const order = new Order({ tableNumber, items, totalAmount });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getOrders, createOrder, updateOrderStatus };
