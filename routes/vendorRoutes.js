const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController.js');

router.get('/get', vendorController.getVendors);
router.post('/create', vendorController.createVendor);
router.put('/updateVendor', vendorController.updateVendor);
router.delete('/deleteVendor', vendorController.deleteVendor);



module.exports = router;
