const User = require("../models/userModel");

const createUser = async function (req, res) {
  let getUserData = req.body;
  let showData = await User.create(getUserData);
  res.send({ status: true, data: showData });
};

const loginUser = async function (req, res) {
  let mobileNum = req.body.mobile;
  let password = req.body.password;

  let user = await User.findOne({ mobile: mobileNum, password: password });
  if (!user){
    return res.send({status: false, msg: "Mobile Number or password is not correct",});
  }

  let token = jwt.sign({ userId: user._id.toString()}, "FunctionUp-Uranium");
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  let userId = req.params.userId;

  let userData = await User.findById(userId);
  if (!userData){
    return res.send({ status: false, msg: "No such user exists" });
  }

  res.send({ status: true, data: userData });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await User.findById(userId);
  
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await User.findOneAndUpdate(
    { _id: userId }, 
    { $set: userData},
    { new: true},
    );
  res.send({ status: true, data: updatedUser });
};

const deleteUser = async function(req, res){
  let userId = req.params.userId;
  let user = await User.findOneAndUpdate(
    {_id: userId},
    { $set: {isDeleted: true}},
    { new: true}
  )

  res.send({status: true, data: user});
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
