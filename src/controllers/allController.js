const bookModel = require('../models/bookModel');
const authorModel = require('../models/authorModel');

const createBook = async function(req, res){
    const books = req.body;
    const showBooks = await bookModel.create(books);
    res.send( { data: showBooks } );
}

const addAuthor = async function(req, res){
    const author = req.body;
    const showAuthor = await authorModel.create(author);
    res.send( { data: showAuthor } );
}   

const bookbyChetanBhagat = async function(req, res){
    const showAuthor = await authorModel.findOne({author_name: "Chetan Bhagat"});
    
    const getAuthorID = showAuthor.author_id;

    const allBooks = await bookModel.find({ author_id: getAuthorID }).select({ bookName: 1, _id: 0 });
    res.send( { data: allBooks } );
}

const findandUpdateTwoStates = async function(req, res){
    const findUpdate = await bookModel.findOneAndUpdate(
        { bookName: "Two states" }, //condition 
        { $set: { price: 100 } }, //updating the price to 100
        { new: true } //so that the data fetch is recent and not the pervious one
    )
    const getAuthorID = findUpdate.author_id;
    const getUpdatePrice = await bookModel.findOne({ bookName: "Two states", }).select({ price: 1, _id: 0 })

    const allBooks = await authorModel.findOne({ author_id: getAuthorID }).select({ author_name: 1, _id: 0 });
    res.send( { data: [allBooks , getUpdatePrice] } );
}

const findBooks = async function(req, res){
    const getBookPrice = await bookModel.find({ price: {$gte: 50, $lte: 100} }).select({ author_id: 1, _id: 0 });

    let getAuthorNames=[]
    for(let i = 0; i < getBookPrice.length; i++){
        let getAuthorID = getBookPrice[i].author_id;
        let temp = await authorModel.findOne({ author_id: getAuthorID }).select({ author_name: 1, _id: 0 });
        getAuthorNames.push(temp)
    }
    
    res.send( { data: getAuthorNames } );
}



module.exports.createBook = createBook;
module.exports.addAuthor = addAuthor;
module.exports.bookbyChetanBhagat = bookbyChetanBhagat;
module.exports.findandUpdateTwoStates = findandUpdateTwoStates;
module.exports.findBooks = findBooks;