const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,

    },
    ContactNo:{
        type:Number,
        required:true
    },
    Passward:{
        type:String,
        required:true
    }

})
// const mongoose = require('mongoose');

// this function is used to create schema of user details for login and signup
module.exports = mongoose.model('user',userSchema);
// this function is used to create schema of user details for login and signup