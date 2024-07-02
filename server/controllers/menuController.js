// server/controllers/menuController.js
const MenuItem = require('../models/MenuItem');

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.status(200).json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMenuItem = async (req, res) => {
  const { name, description, price, category, image } = req.body;
  try {
    const menuItem = new MenuItem({ name, description, price, category, image });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, image } = req.body;
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(
      id,
      { name, description, price, category, image },
      { new: true }
    );
    res.status(200).json(menuItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    await MenuItem.findByIdAndDelete(id);
    res.status(204).json({ message: 'Menu item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getMenuItems, createMenuItem, updateMenuItem, deleteMenuItem };
