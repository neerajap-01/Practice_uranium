const userModel = require('../models/userModel');

const createUsers = async function(req, res){
    const user = req.body;
    const showUser = await userModel.create(user);
    res.send( { data: showUser } );
}

const getUsers = async function(req, res){
    const showUsers = await userModel.find();
    res.send( { data: showUsers } );
}

module.exports.createUsers = createUsers;
module.exports.getUsers = getUsers;
