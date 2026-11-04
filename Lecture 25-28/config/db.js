// All the connection related files will be written here
// mongoose is object library
const { mongoose } = require("mongoose")

async function MONGODBConnection() {
    try {
        await mongoose.connect("mongodb://localhost:27017/AiMl")
        console.log("MongoDB Connected")
    } catch (err) {
        console.log(err)
    }
}

module.exports = MONGODBConnection;
// hame schma create krna h , kyu krna h abhi pata chalega - 