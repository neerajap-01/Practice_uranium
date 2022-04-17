const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://Uranium-Batch:aruSjkdGdfhc9MRK@functionup.eel5r.mongodb.net/Neeraj01DB?retryWrites=true&w=majority',{
    useNewUrlParser: true,
})
.then(console.log("Connect to MongoDB"))
.catch(error => console.log(error))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
