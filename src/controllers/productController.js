const Product = require('../models/productModel');

const addProduct = async (req, res) => {
  const getProductData = req.body;

  const showData = await Product.create(getProductData);
  res.send({ data: showData, status: true});
}


module.exports.addProduct = addProduct;