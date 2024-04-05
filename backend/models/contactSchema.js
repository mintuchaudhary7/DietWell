const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,

    },
    Query:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('query',contactSchema);
// this is schema of contact 