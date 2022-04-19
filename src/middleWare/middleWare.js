const logData = function(req, res, next){
  let timeStamp = new Date();
  let date = timeStamp.getFullYear() + '-' + (timeStamp.getMonth() + 1) + '-' + timeStamp.getDate() + ' ' + timeStamp.getHours() + ':' + timeStamp.getMinutes() + ':' + timeStamp.getSeconds();
  

  console.log(date);
  console.log(req.ip);
  console.log(req.path);
  next();
};

module.exports.logData = logData;