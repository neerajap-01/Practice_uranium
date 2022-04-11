const express = require('express');
const UserController = require('../controllers/userController')

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUsers', UserController.createUsers)
router.get('/getUsers', UserController.getUsers)

module.exports = router;
// adding this comment for no reason