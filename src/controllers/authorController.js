const Author = require('../models/authorModel');

//1
const addAuthor = async function(req, res){
  let getAuthorData = req.body;

  let showEntryData = await Author.create(getAuthorData);
  res.send({ data: showEntryData , status: true });
}



module.exports.addAuthor = addAuthor;