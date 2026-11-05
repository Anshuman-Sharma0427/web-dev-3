const mongoose = require("mongoose")

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 8

    },
    course: {
        type: String,
        required: true,
        enum: ["BTech", "BCA", "MBA"]
    },
    age: {
        type: Number,
        required: true,
        max: 60,
        min: 18,
        validate:{
            validator:function(value){
                return value>=18
            },
            message:'Abhi tu baccha h mera '
        }
    }
})


const userSchema = mongoose.model("user", user) // ye collection create krega

module.exports = userSchema;
