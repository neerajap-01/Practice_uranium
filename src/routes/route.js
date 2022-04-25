const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController");
const Weather = require('../controllers/weatherController');
const Memes = require('../controllers/memesController');


//Assignment 1 - Cowin API requests
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/vaccineSlots", CowinController.vaccineSlots)

router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

//Assignment 2 - Current Weather API requests
router.get('/getCurrentWeather', Weather.getCurrentWeather);
router.get('/getTempIncreased', Weather.getTempIncreased);

//Assignment 3 - Memes API requests 87743020
router.get('/getAllMemes', Memes.getAllMemes);
router.post('/createMemes', Memes.createMemes);

module.exports = router;