const mongoose = require('mongoose');
require('dotenv').config();
module.exports = contactConnect = ()=>{
    mongoose.connect(process.env.CONTACT_DATABASE_URL,{
        // connect  is used to connect with data base
    })
    // below block is for catching the error
    .then(()=>{console.log("Contact connected successfully")})
    .catch((error)=>{
        console.log("Issue in DB Connetion");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    })
}
