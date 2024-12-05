const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  address: { type: String, required: true },
  status: { type: String, default: 'Pending' }, // e.g., Pending, Completed, Cancelled
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
