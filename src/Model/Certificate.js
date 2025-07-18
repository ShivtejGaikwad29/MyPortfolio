const mongoose = require("mongoose");

const Certificate = mongoose.Schema({
    imageurl:String,
    title:String,
    viewurl:String,
});

module.exports = mongoose.model("certificate",Certificate);
