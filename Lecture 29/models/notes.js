const mongoose = require("mongoose")

const note = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    AuthorName:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    file:{
        data:Buffer,
        contentType:String
    },
    references:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    notes:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:["Educational","Thriller","Comedy","General"]
    }

})

const notesSchema = mongoose.model("note", note) // ye collection create krega

module.exports = notesSchema;
