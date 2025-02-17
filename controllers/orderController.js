const Order = require('../models/Order');

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('product vendor customer');
    res.json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.createOrder = async (req, res) => {
  console.log('Request Body:', req.body); // Log the request body
  const { product, vendor, customer, quantity, amount } = req.body;
  const newOrder = new Order({ product, vendor, customer, quantity, amount });

  try {
    const order = await newOrder.save();
    res.status(201).json(order);
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(400).json({ message: err.message });
  }
};