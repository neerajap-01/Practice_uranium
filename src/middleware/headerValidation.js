const headerValidation = (req, res, next) => {
  if(req.headers.hasOwnProperty('isfreeappuser')){
    req.headers.isFreeAppUser = req.headers.isfreeappuser;
    next();
  }else{
    res.send({msg: 'The request is missing a mandatory header.', status: false});
  }
}

module.exports.headerValidation = headerValidation;