const axios = require('axios');

const getAllMemes = async (req, res) => {
  let options ={
    method: 'get',
    url: `https://api.imgflip.com/get_memes`
  }

  let response = await axios(options);

  res.status(200).send({status: true, data: response.data})
}
const createMemes = async (req, res) => {
  let {...data} = req.query

  let options ={
    method: 'post',
    url: `https://api.imgflip.com/caption_image?template_id=${data.id}&text0=${data.text0}&text1=${data.text1}&username=${data.username}&password=${data.password}`
  }

  let response = await axios(options);

  res.status(200).send({status: true, data: response.data.data})
}

module.exports.getAllMemes = getAllMemes;
module.exports.createMemes = createMemes;