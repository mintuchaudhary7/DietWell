const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: false,
  },
  Name: {
    type: String,
    required: false,
  },
  Status: {
    type: String,
    required: false,
    default: "pending",
  },
  Question: {
    type: String,
    required: false,
  },
  Answer: {
    type: String,
    required: false,
  },
});
// const mongoose = require('mongoose');

// this function is used to create schema of user details for login and signup
module.exports = mongoose.model("userquestions", userSchema);
// this function is used to create schema of user details for login and signup
