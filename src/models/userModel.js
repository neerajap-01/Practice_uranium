const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true,
    },
    email: String,
    gender: {
        type: String,
        enum: ['Male','Female','Others'],
    },
    age: Number,
    isIndian: Boolean,
    parentsInfo: {
        motherName: String,
        fatherName: String,
        siblingName: String
    },
    cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userData); //User ==>>> users this is done by MongoDB itself i.e it changes capital U to small u and User to users in plural.