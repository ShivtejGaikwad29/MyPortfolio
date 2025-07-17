const mongoose=require("mongoose")

const Project=mongoose.Schema({
    title:String,
    subtitle:String,
    description:String,
    url:String,
});

module.exports = mongoose.model("project",Project);