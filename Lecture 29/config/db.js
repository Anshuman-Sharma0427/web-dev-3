// All the connection related files will be written here
// mongoose is object library
const { mongoose } = require("mongoose")
// require("dotenv").config()

async function MONGODBConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB Connected")
    } catch (err) {
        console.log(err)
    }
}

module.exports = MONGODBConnection;
// hame schma create krna h , kyu krna h abhi pata chalega - 