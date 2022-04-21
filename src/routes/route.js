const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const Auth = require('../middleware/auth');

router.post("/users", userController.createUser )

router.post("/login", userController.loginUser)

router.get("/users/:userId", Auth.authUser, userController.getUserData)

router.put("/users/:userId", Auth.authUser, userController.updateUser)

router.delete("/users/:userId", Auth.authUser, userController.deleteUser)

module.exports = router;