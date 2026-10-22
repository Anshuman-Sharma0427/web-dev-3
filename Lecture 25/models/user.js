const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    Age:Number
})

const userSchema = mongoose.model("user",user) // ye collection create krega

module.exports = userSchema;
