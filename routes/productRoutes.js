const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.get('/get', productController.getProducts);
router.post('/create', productController.createProduct);

module.exports = router;
