const express = require('express');
const Author = require('../controllers/authorController');
const Publisher = require('../controllers/publisherController');
const Book = require('../controllers/bookController');

const router = express.Router();

router.post('/addAuthor', Author.addAuthor);
router.post('/addPublisher', Publisher.addPublisher);
router.post('/addBook', Book.addBook);
router.get('/fetchBooks', Book.fetchBooks);
router.put('/updateBooks', Book.updateBooks);

module.exports = router;