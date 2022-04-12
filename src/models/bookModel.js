const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true,
        required: true,
    },
    price: {
        indianPrice: String,
        europeanPrice: String,
    },
    year: {
        type: Number,
        default: 2021,
    },
    tags: [ String ],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema); //Book ==>>> books this is done by MongoDB itself i.e it changes capital B to small b and Book to Books in plural.

//['Adventure', 'Sci-Fi', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Finance']