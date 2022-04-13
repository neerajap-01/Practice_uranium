const express = require('express');
const allController = require('../controllers/allController')

const router = express.Router();

router.post('/createBook', allController.createBook);
router.post('/addAuthor', allController.addAuthor);
router.get('/bookbyChetanBhagat', allController.bookbyChetanBhagat);
router.get('/findandUpdateTwoStates', allController.findandUpdateTwoStates);
router.get('/findBooks', allController.findBooks);


module.exports = router;
// adding this comment for no reason

