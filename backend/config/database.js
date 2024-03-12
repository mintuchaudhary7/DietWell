const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{

    })
    .then(()=>{console.log("database connected successfully")})
    .catch((error)=>{
        console.log("Issue in DB Connetion");
        console.error(error.message);
        //iska matlab kya h ?
        process.exit(1);
    })
}
module.exports = dbConnect;


// this function is for connecting the database to backend; 