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
    },
    Age:{
        type:Number,
        required:false,
        default:0
    },
    Height:{
        type:Number,
        required:false,
        default:0
    },
    Weight:{
        type:Number,
        required:false,
        default:0
    },
    Gender:{
        type:String,
        required:false,
        default:"Null"
    },
    Dietpreference:{
        type:String,
        required:false,
        default:"NULL"
    },
    Activity:{
        type:String,
        required:false,
        default:"NULL"
    },
    BMR:{
        type:Number,
        required:false,
        default:0
    },
    Allergy:{
        type:String,
        required:false,
        default:"NULL"
    },
    Disease:{
        type:String,
        required:false,
        default:"NULL"
    },

    


})
// const mongoose = require('mongoose');

// this function is used to create schema of user details for login and signup
module.exports = mongoose.model('user',userSchema);
// this function is used to create schema of user details for login and signup