const mongoose = require('mongoose');
require('dotenv').config();
module.exports = contactConnect = ()=>{
    mongoose.connect(process.env.CONTACT_DATABASE_URL,{

    })
    .then(()=>{console.log("Contact connected successfully")})
    .catch((error)=>{
        console.log("Issue in DB Connetion");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    })
}