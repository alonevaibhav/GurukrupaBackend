const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const config = require('./config/config');
const vendorRoutes = require('./routes/vendorRoutes');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Connect to database
connectDB();

// Middleware
// app.use(bodyParser.json());


app.use(bodyParser.json());  // ✅ Parse JSON
app.use(bodyParser.urlencoded({ extended: true }));  // ✅ Parse form data
// app.use(auth);

// Routes
app.use('/api/vendors', vendorRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Error handling
app.use(errorHandler);

module.exports = app; // Export the app object
