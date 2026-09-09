const express = require("express")
const app = express();
const noteRoutes = require("./routes/noteRoutes");
const morgan = require("morgan")

// const { createNote } = require("./controllers/notesController");

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))





app.use("/api",noteRoutes)

app.listen(3000,()=>{
    console.log("Server is runing on PORT 3000")
})

// morgan,dev,combine,cors