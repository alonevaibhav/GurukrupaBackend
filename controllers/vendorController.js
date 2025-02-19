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

// Update Vendor by ID
exports.updateVendor = async (req, res) => {
  const { id, name, contact, address } = req.body; // Extract the ID and fields from body

  if (!id) {
    return res.status(400).json({ message: "Vendor ID is required" });
  }

  try {
    // Find and update the vendor
    const updatedVendor = await Vendor.findByIdAndUpdate(
      id,
      { name, contact, address },
      { new: true, runValidators: true } // Return updated vendor & validate fields
    );

    if (!updatedVendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    res.json(updatedVendor); // Send updated vendor data
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Vendor by ID
exports.deleteVendor = async (req, res) => {
  const { id } = req.body; // Extracting the id from request body

  if (!id) {
    return res.status(400).json({ message: "Vendor ID is required" });
  }

  try {
    // Find and delete the vendor by ID
    const deletedVendor = await Vendor.findByIdAndDelete(id);

    if (!deletedVendor) {
      return res.status(404).json({ message: "Vendor not found" });
    }

    res.json({ message: "Vendor deleted successfully", deletedVendor });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
