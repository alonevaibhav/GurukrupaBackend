const Vendor = require('../models/Vendor');

exports.getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createVendor = async (req, res) => {
  const { name, contact, address } = req.body;
  const newVendor = new Vendor({ name, contact, address });

  try {
    const vendor = await newVendor.save();
    res.status(201).json(vendor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
