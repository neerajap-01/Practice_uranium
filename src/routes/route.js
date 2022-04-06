const express = require('express');
const logger = require('./logger')
const Welcome = require("../logger/logger")
const helper = require("../util/helper")
const formatter = require("../validator/formatter")
const lodash = require("../loadash/loadash_depend")

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send(Welcome.msg() + "</br>" + helper.date() + "</br>" + helper.month() + "</br>" + helper.info() + "</br>" + formatter.wordString() + "</br>" + formatter.trim() + "</br>" + formatter.upperCaseWord() + "</br>" + formatter.lowerCaseWord());
});


router.get('/hello', function(req, res, next) {
    res.send(lodash.Array());
    // res.send(lodash.Array() + "</>" + lodash.oddNums() + "</br>" + lodash.uniqueArr() + "</br>" + lodash.Object());
})
router.get('/hello2', function(req, res, next) {
    res.send(lodash.oddNums());
})
router.get('/hello3', function(req, res, next) {
    res.send(lodash.uniqueArr());
})
router.get('/hello4', function(req, res, next) {
    res.send(lodash.Object());
})

module.exports = router;
// adding this comment for no reason