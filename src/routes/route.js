const express = require('express');
const BookController = require('../controllers/bookController')

const router = express.Router();

router.post('/addBooks', BookController.addBooks);
router.get('/listBooks', BookController.listBooks);

module.exports = router;
// adding this comment for no reason