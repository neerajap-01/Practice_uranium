const bookModel = require('../models/bookModel');

const addBooks = async function(req, res){
    const books = req.body;
    const showBooks = await bookModel.create(books);
    res.send( { data: showBooks } );
}

const listBooks = async function(req, res){
    const showBooks = await bookModel.find();
    res.send( { data: showBooks } );
}

module.exports.addBooks = addBooks;
module.exports.listBooks = listBooks;
