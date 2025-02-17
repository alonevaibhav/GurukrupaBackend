const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  
});

module.exports = mongoose.model('Product', ProductSchema);
