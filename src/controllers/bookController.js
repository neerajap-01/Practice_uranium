const Book = require('../models/bookModel');
const Author = require('../models/authorModel');
const Publisher = require('../models/publisherModel');

//3
const addBook = async function(req, res){
  let getBookData = req.body;

  if(getBookData.author && getBookData.publisher){
    let checkAuthorID = await Author.findById(getBookData.author);
    let checkPublisherID = await Publisher.findById(getBookData.publisher);

    //Checking if the AuthorID is valid or not
    if(checkAuthorID){

      //Checking if the PublisherID is valid or not
      if(checkPublisherID){
        let showEntryData = await Book.create(getBookData);
        res.send({ data: showEntryData, status: true });
      }else{
        res.send({ msg: "Publisher ID is not valid", status: false });
      }

    }else{
      res.send({ msg: "Author ID is not valid", status: false });
    }

  }else{
    res.send({ msg: "Author & Publisher are the required fields respectively", status: false });
  }
}


//4
const fetchBooks = async function(req, res){
  const getBooks = await Book.find().populate('author publisher')

  res.send({ data: getBooks, status: true });
}


//5
const updateBooks = async function(req, res){
  const getIsHardCover = req.body.isHardCover;
  const getPrice = req.body.price;
  const getPublisherId = await Publisher.find({ publisherName: ['Penguin','HarperCollins'] }).select({_id: 1});

  let updateBooksData;
  for(let i = 0; i < getPublisherId.length; i++){
    updateBooksData +=  await Book.updateOne(
      { publisher: getPublisherId[i]._id},
      { $set: {isHardCover: getIsHardCover}}
    )
  }

  const getAuthorId = await Author.find({ rating: {$gt: 3.5}}).select({_id: 1});

  let updateBooksPrice;
  for(let i = 0; i < getAuthorId.length; i++){
    updateBooksPrice +=  await Book.updateOne(
      { author: getAuthorId[i]._id},
      { $inc: {price: getPrice}} // 10 , -10
    )
  }


  res.send({ data: [{msg: "Following are the changes made to specific Collection"},updateBooksData,updateBooksPrice], status: true });
}

module.exports.addBook = addBook;
module.exports.fetchBooks = fetchBooks;
module.exports.updateBooks = updateBooks;