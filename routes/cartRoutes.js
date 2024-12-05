const express = require('express');
const { addToCart, getCart, deleteFromCart } = require('../controllers/cartController');

const router = express.Router();

// Routes
router.post('/', addToCart);             // Add Product to Cart
router.get('/:userId', getCart);         // Get All Products in Cart
router.delete('/', deleteFromCart);      // Delete Product from Cart

module.exports = router;
