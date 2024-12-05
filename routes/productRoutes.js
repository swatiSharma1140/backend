const express = require('express');
const {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

// Routes
router.post('/', addProduct);              // Add Product
router.get('/', getAllProducts);           // Get All Products
router.put('/:id', updateProduct);         // Update Product
router.delete('/:id', deleteProduct);      // Delete Product

module.exports = router;
