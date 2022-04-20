const User = require("../models/userModel");

const addUser = async (req, res) => {

  if(req.headers.isFreeAppUser == 'true'){
    let getUserData = req.body;
    getUserData.isFreeAppUser = true;

    let showData = await User.create(getUserData);
    res.send({data: showData, status: true});
  }else{
    let getUserData = req.body;

    let showData = await User.create(getUserData);
    res.send({data: showData, status: true});
  }
  
}

module.exports.addUser = addUser;