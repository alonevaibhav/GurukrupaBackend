const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  unit: {
    type: String, // Example: 'kg', 'liters', 'pieces', etc.
    required: false,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
