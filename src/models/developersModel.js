const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema({
    developerName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male','Female','others'],
    },
    percentage: Number,
    batch: {
      type: ObjectId,
      ref: 'Batches'
    }
}, { timestamps: true });

module.exports = mongoose.model('Developer', developerSchema);   