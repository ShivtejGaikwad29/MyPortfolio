const mongoose = require("mongoose");

const Contact = mongoose.Schema({
    name:String,
    email:String,
    message:String,
});

module.exports = mongoose.model("contact",Contact);