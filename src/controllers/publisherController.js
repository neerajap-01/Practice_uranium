const Publisher = require('../models/publisherModel');

//2
const addPublisher = async function(req, res){
  let getPublisherData = req.body;

  let showEntryData = await Publisher.create(getPublisherData);
  res.send({ data: showEntryData, status: true });
}



module.exports.addPublisher = addPublisher;