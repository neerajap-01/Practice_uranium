const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    size: Number,
    program: {
      type: String,
      enum: ['Frontend','Backend'],
    },
}, { timestamps: true })

module.exports = mongoose.model('Batches', batchSchema);