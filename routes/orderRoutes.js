const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController.js');

router.get('/get', orderController.getOrders);
router.post('/create', orderController.createOrder);

module.exports = router;
