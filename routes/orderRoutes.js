const express = require('express');
const { placeOrder, getOrdersByUser } = require('../controllers/orderController');

const router = express.Router();

// Routes
router.post('/', placeOrder);           // Place Order
router.get('/:userId', getOrdersByUser); // Get Orders by User

module.exports = router;
