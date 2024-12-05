const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');

// Place Order
const placeOrder = async (req, res) => {
  const { userId, address } = req.body;

  try {
    // Find the user's cart
    const cart = await Cart.findOne({ userId }).populate('products.productId');

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Calculate total amount
    const totalAmount = cart.products.reduce((acc, item) => {
      return acc + item.productId.price * item.quantity;
    }, 0);

    // Create a new order
    const order = new Order({
      userId,
      products: cart.products,
      totalAmount,
      address,
    });

    await order.save();

    // Clear the user's cart
    cart.products = [];
    await cart.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get Orders by User
const getOrdersByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId }).populate('products.productId');

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: 'No orders found' });
    }

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { placeOrder, getOrdersByUser };
