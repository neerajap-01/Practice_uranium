const express = require('express');
const BookController = require('../controllers/bookController')

const router = express.Router();

router.post('/createBook', BookController.createBook);
router.get('/bookList', BookController.bookList);
router.post('/getBooksInYear', BookController.getBooksInYear);
router.post('/getParticularBooks', BookController.getParticularBooks);
router.get('/getXINRBooks', BookController.getXINRBooks);
router.get('/getRandomBooks', BookController.getRandomBooks);


module.exports = router;
// adding this comment for no reason