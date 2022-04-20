const express = require('express');
const router = express.Router();
const middleware = require('../middleware/headerValidation');
const Product = require('../controllers/productController');
const User = require('../controllers/userController');
const Order = require('../controllers/orderController');

router.post('/addProduct', Product.addProduct);
router.post('/addUser', middleware.headerValidation, User.addUser);
router.post('/createOrder', middleware.headerValidation, Order.createOrder);

module.exports = router;