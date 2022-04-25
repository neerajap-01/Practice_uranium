const axios = require('axios');

const getCurrentWeather = async (req, res)=>{
  try {
    let place = req.query.place;
    let appId = req.query.appId;

    let options = {
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appId}`
    }

    let response = await axios(options);

    res.status(200).send({status: true, data: response.data});
  }catch (err) {
    res.status(500).send({ msg: err.message })
  }
}

const getTempIncreased = async (req, res)=>{
  try {
    let placeId = req.query.id;
    let appId = req.query.appId;

    let options = {
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/group?id=${placeId}&appid=${appId}`
    }

    let response = await axios(options);
    let array = response.data.list.length
    let result = [];

    for(let i = 0; i < array; i++){
      let resData = {
        city: response.data.list[i].name,
        temp: response.data.list[i].main.temp
      };

      result.push(resData);
    }
    
    res.status(200).send({status: true, data: result});
  }catch (err) {
    res.status(500).send({ msg: err.message })
  }
}


module.exports.getCurrentWeather = getCurrentWeather;
module.exports.getTempIncreased = getTempIncreased;