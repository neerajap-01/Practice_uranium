const express = require('express');
const arrayData = require('../assignmentData/arrayData')

const router = express.Router();


router.get('/all-candidates', function (req, res) {
    res.send(arrayData.nameStud);
});

router.get('/candidates', function (req, res) {
    if(req.query.count === "0" || req.query.count > 10 || req.query.count === ""){
        res.send("Count must be greater than 0 and less than or equal to 10")
    }else {
        let printData = [];
        for(let i = 0;i < req.query.count;i++){
            printData.push(arrayData.nameStud[i]);
        }
        res.send(printData);
    }
});

router.get('/movies',function(req, res){
    res.send(arrayData.movieName)
})

router.get('/movies/:indexNumber',function(req, res){
    if(req.params.indexNumber > 10 || req.params.indexNumber === ""){
        res.send("The index number must be less than or equal to 10");
    }else {
        res.send(`The movie name at ${req.params.indexNumber} index is ${arrayData.movieName[req.params.indexNumber]}`);
    }    
})

router.get('/films',function(req,res){
    res.send(arrayData.movieNameObj);
})

router.get('/films/:filmId',function(req,res){
    for(let i = 0;i < arrayData.movieNameObj.length;i++){
        if(req.params.filmId === "0" || req.params.filmId > 10 || req.params.filmId === ""){
            res.send("The film Id number must be greater than 0 and less than or equal to 10");
        }else if(arrayData.movieNameObj[i].id == req.params.filmId){
            res.send(arrayData.movieNameObj[i]);
            break;
        }
    }
})

module.exports = router;
// adding this comment for no reason