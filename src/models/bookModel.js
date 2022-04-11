const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: {
        type: String,
        enum: ['Adventure', 'Sci-Fi', 'Crime', 'Drama', 'Fantasy', 'Horror'],
    },
    year: Number,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema); //Book ==>>> books this is done by MongoDB itself i.e it changes capital B to small b and Book to Books in plural.