const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('vendor');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  const { name, price, vendor } = req.body;
  const newProduct = new Product({ name, price, vendor });

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
