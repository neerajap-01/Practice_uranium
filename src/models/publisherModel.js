const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    publisherName: {
      type: String,
      required: true,
    },
    headQuarter: String,
}, { timestamps: true })

module.exports = mongoose.model('newPublisher', publisherSchema);