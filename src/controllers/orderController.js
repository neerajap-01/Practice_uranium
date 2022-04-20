const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const User= require("../models/userModel");

const createOrder = async (req, res) => {
  let getOrderDetail = req.body; //Fetching the data from req.body

  //Checking if the fetch data consist userId & productId;
  if(getOrderDetail.hasOwnProperty('userId') && getOrderDetail.hasOwnProperty('productId')){
    let checkUserId = await User.findOne({_id: getOrderDetail.userId}); //finding the the document with the fetched userID 
    let checkProductId = await Product.findOne({_id: getOrderDetail.productId}); //finding the the document with the fetched productID 

    //Checking if the userId is valid or not
    if(checkUserId){

      //Checking if the productId is valid or not
      if(checkProductId){
        
        //Checking if req.headers.isfreeappuser is false
        if(req.headers.isfreeappuser == 'false'){

          //Checking the specified product's and user's price and balance respectively
          let checkProductPrice = checkProductId.price;
          let checkUserBal = checkUserId.balance;

          //checking if the productPrice is more than the userBalance 
          if(checkProductPrice > checkUserBal){
            res.send({msg: "Your balance is insufficient", status: false})
          }
          else{

            //Getting the current date
            let timeStamp = new Date();
            let currentDate = timeStamp.getDate() + '/' + (timeStamp.getMonth() + 1) + '/' + timeStamp.getFullYear();

            //Updating the User Balance after purchasing the product.
            await User.updateOne(
              {_id: getOrderDetail.userId},
              { $inc: {balance: -checkProductPrice}}
            )

            //Setting-up the order details as told in problem statement
            getOrderDetail.amount = checkProductPrice;
            getOrderDetail.isFreeAppUser = false;
            getOrderDetail.date = currentDate 

            //Storing the order details in the database
            let orderDetails = await Order.create(getOrderDetail);
            res.send({msg: "Product price has been deducted from User's Balance", data: orderDetails, status: true})
          }

        }
        else if(req.headers.isfreeappuser == 'true'){ //Checking if req.headers.isfreeappuser is true

          //Getting the current date
          let timeStamp = new Date();
          let currentDate = timeStamp.getDate() + '/' + (timeStamp.getMonth() + 1) + '/' + timeStamp.getFullYear();

          //Setting-up the order details as told in problem statement
          getOrderDetail.amount = 0;
          getOrderDetail.isFreeAppUser = true;
          getOrderDetail.date = currentDate 

          //Storing the order details in the database
          let orderDetails = await Order.create(getOrderDetail);
          res.send({data: orderDetails, status: true})
        }

      }else{
        res.send({msg: 'ProductId is invalid'});
      }
    }else{
      res.send({msg: 'UserId is invalid'});
    }
  } else{
    res.send({msg: 'UserId and ProductId is a mandatory attribute'});
  }
  
}


module.exports.createOrder = createOrder;