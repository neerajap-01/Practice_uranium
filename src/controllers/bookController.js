const bookModel = require('../models/bookModel');

const createBook = async function(req, res){
    const books = req.body;
    const showBooks = await bookModel.create(books);
    res.send( { data: showBooks } );
}

const bookList = async function(req, res){
    const showBooks = await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 });
    res.send( { data: showBooks } );
}

const getBooksInYear = async function(req, res){
    const getYear = req.body.year;
    const showBooks = await bookModel.find({ year: getYear });
    res.send( { data: showBooks } );
}

const getParticularBooks = async function(req, res){
    const getObjKey = req.body;
    const showBooks = await bookModel.find(getObjKey);
    res.send( { data: showBooks } );
}

const getXINRBooks = async function(req, res){
    const showBooks = await bookModel.find({ 'price.indianPrice': {$in: ["300INR", "400INR", "500INR"]} });
    res.send( { data: showBooks } );
}

const getRandomBooks  = async function(req, res){
    const showBooks = await bookModel.find({ $or: [{stockAvailable: true}, {totalPages: {$gt: 300}}] });
    res.send( { data: showBooks } );
}

module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
