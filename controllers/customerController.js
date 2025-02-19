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
  console.log("Incoming Request Body:", req.body); // Debugging Log

  const { name, contact, address } = req.body;

  // Check if req.body is empty or missing required fields
  if (!name || !contact || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newCustomer = new Customer({ name, contact, address });

  try {
    const customer = await newCustomer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update Customer by ID
exports.updateCustomer = async (req, res) => {
  const { id, name, contact, address } = req.body;  // id comes from request body

  if (!id) {
    return res.status(400).json({ message: "Customer ID is required" });
  }

  try {
    // Find and update the customer
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { name, contact, address },
      { new: true, runValidators: true } // Return updated doc & validate fields
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json(updatedCustomer); // Send updated customer data
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Customer by ID
exports.deleteCustomer = async (req, res) => {
  const { id } = req.body;  // Extracting id from request body

  if (!id) {
    return res.status(400).json({ message: "Customer ID is required" });
  }

  try {
    // Find and delete the customer by ID
    const deletedCustomer = await Customer.findByIdAndDelete(id);

    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    res.json({ message: "Customer deleted successfully", deletedCustomer });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



