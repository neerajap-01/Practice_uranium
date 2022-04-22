const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createUser = async(req, res) => {
  try{
    let getUserData = req.body;
    if(Object.keys(getUserData).length == 0) return res.status(400).send({status: false, msg: 'User details is required to create account'})
    let showData = await User.create(getUserData);
    res.status(201).send({ status: true, data: showData });
  } catch(err){
    res.status(500).send({status: false, msg: err.message})
  }
};

const loginUser = async(req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    if(!email && !password) return res.status(400).send({status: false, msg: 'Email and password is required!'});

    let user = await User.findOne({ emailId: email, password: password });
    if (!user){
      return res.status(401).send({status: false, msg: "Mobile Number or password is not correct",});
    }else if(user.isDeleted == true){
      return res.status(401).send({status: false, msg: "Logging failed! Account deleted",});
    }

    let token = jwt.sign({ userId: user._id.toString()}, "FunctionUp-Uranium",{expiresIn: '30d'});
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: 'Logged in successfully' });
  } catch (err) {
    res.status(500).send({status: false, msg: err.message});
  }
};

const getUserData = async(req, res) => {
  try {
    let userId = req.params.userId;
    if(!userId) return res.status(400).send({status: false, msg: 'UserId is required'});

    let userData = await User.findById(userId);
    if (!userData){
      return res.status(404).send({ status: false, msg: "No such user exists" });
    }else if(userData.isDeleted == true){
      return res.status(401).send({status: false, msg: "Users data has been deleted",});
    }

    res.status(200).send({ status: true, data: userData });
  }catch (err){
    res.status(500).send({status: false, msg: err.message});
  }
};

const updateUser = async(req, res) => {
  try {
    let userId = req.params.userId;
    if(!userId) return res.status(400).send({status: false, msg: 'UserId is required'});

    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({status: false, msg: "No such user exists"});
    }else if(user.isDeleted == true){
      return res.status(401).send({status: false, msg: "Sorry, cannot update data of deleted user",});
    }

    let userData = req.body;
    if(Object.keys(userData).length == 0) {
      return res.status(400).send({status: false, msg: 'User details is required to update user account'});
    } else if(userData.hasOwnProperty('password') || userData.hasOwnProperty('isDeleted')){
      return res.status(403).send({status: false, msg: 'Cannot update the selected field'})
    }

    let updatedUser = await User.findOneAndUpdate(
      { _id: userId }, 
      { $set: userData},
      { new: true},
      );
    res.status(200).send({ status: true, data: updatedUser });
  }catch (err){
    res.status(500).send({status: false, msg: err.message});
  }
};

const deleteUser = async(req, res) => {
  try {
    let userId = req.params.userId;
    if(!userId) return res.status(400).send({status: false, msg: 'UserId is required'});

    let getUserId = await User.findById(userId);
    if (!getUserId) {
      return res.status(404).send("No such user exists");
    }else if(getUserId.isDeleted == true){
      return res.status(404).send({status: false, msg: "User data is already deleted"});
    }

    let user = await User.findOneAndUpdate(
      {_id: userId},
      { $set: {isDeleted: true}},
      { new: true}
    )

    res.status(200).send({status: true, msg: "Account has been deleted"});
  }catch (err){
    res.status(500).send({status: false, msg: err.message});
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
