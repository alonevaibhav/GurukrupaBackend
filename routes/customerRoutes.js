const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/get', customerController.getCustomers);
router.post('/create', customerController.createCustomer);
router.put('/updateCustomer', customerController.updateCustomer);
router.delete('/deleteCustomer', customerController.deleteCustomer);



module.exports = router;
