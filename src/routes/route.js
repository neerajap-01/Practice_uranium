const express = require('express');
const Batches = require('../controllers/batchController')
const Developer = require('../controllers/developerController')

const router = express.Router();

router.post('/batches', Batches.batch);
router.post('/developers', Developer.developer);
router.get('/scholarship-developers', Developer.eligibleDevelopers);
router.get('/specific-developers', Developer.specificDevelopers);

module.exports = router;