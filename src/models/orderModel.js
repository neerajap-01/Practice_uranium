const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'UserDocument',
  },
  productId: {
    type: ObjectId,
    ref: 'ProductDocument',
  },
  amount: Number,
  isFreeAppUser: Boolean,
  date: String,
}, {timestamps: true,})

module.exports = mongoose.model('OrderDocument', orderSchema);