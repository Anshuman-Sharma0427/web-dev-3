const express = require("express")
const app = express();
const noteRoutes = require("./routes/noteRoutes");
const morgan = require("morgan")

const db = require("./config/db")
db()
// const { createNote } = require("./controllers/notesController");
const userRoutes = require("./routes/userRoutes")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))


app.use("/api",noteRoutes)
app.use("/user",userRoutes)

app.listen(3000,()=>{
    console.log("Server is runing on PORT 3000")
})

// morgan,dev,combine,cors