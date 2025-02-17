const Customer = require('../models/Customer.js')

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCustomer = async (req, res) => {
  const { name, contact, address } = req.body;
  const newCustomer = new Customer({ name, contact, address });

  try {
    const customer = await newCustomer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
