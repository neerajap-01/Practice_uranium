const Developer = require('../models/developersModel');
const Batches = require('../models/batchesModel');

//1
const developer = async function(req, res){
  let getDeveloperData = req.body;

  let showData = await Developer.create(getDeveloperData);
  res.send({ data: showData , status: true });
}

const eligibleDevelopers = async function(req, res){
  let getEligibleDevelopers = await Developer.find({ $and: [{gender: 'Female'},{percentage: {$gte: 70}}] }).populate('batch');

  res.send({ data: getEligibleDevelopers, status: true});
}

const specificDevelopers = async function(req, res){
  let getPercentageValue= req.query.percentage;
  let getProgramValue = req.query.program;

  let getProgramId = await Batches.find({ program : getProgramValue }).select({_id: 1});

  let getSpecificDevelopers = await Developer.find({ $and: [{percentage: {$gte: getPercentageValue}},{batch: getProgramId}] }).populate('batch');

  res.send({ data: getSpecificDevelopers, status: true});
}

module.exports.developer = developer;
module.exports.eligibleDevelopers = eligibleDevelopers;
module.exports.specificDevelopers = specificDevelopers;