const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try{
    let token = req.headers["x-Auth-token"];
    if (!token) {
      token = req.headers["x-auth-token"];
    }

    if (!token) {
      return res.status(401).send({ status: false, msg: "Token must be present" });
    }

    let decodedToken = jwt.verify(token, "FunctionUp-Uranium");

    if (!decodedToken){
      return res.status(401).send({ status: false, msg: "Token is incorrect" });
    }
    next();
  }
  catch (err){
    res.status(500).send({status: false, msg: err.message});
  }
}

const authorization = (req, res, next) => {
  try {
    let token = req.headers["x-Auth-token"];
    token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "FunctionUp-Uranium");

    let loggedInUser = decodedToken.userId;
    let userLogging = req.params.userId;

    if(loggedInUser !== userLogging) {
      return res.status(403).send({status: false, msg: "Error, authorization failed"});
    }
    next();
  }catch (err){
    res.status(500).send({status: false, msg: err.message});
  }
}

module.exports.authentication = authentication;
module.exports.authorization = authorization;