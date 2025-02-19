const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all fields including unit
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.createProduct = async (req, res) => {
  const { name, unit } = req.body;

  if (!name || !unit) {
    return res.status(400).json({ message: "Name and Unit are required" });
  }

  const newProduct = new Product({ name, unit });

  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.updateProduct = async (req, res) => {
  const { id, name, unit } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, unit },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully", deletedProduct });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

