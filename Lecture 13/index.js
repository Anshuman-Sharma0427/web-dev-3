const express = require("express")
const app = express();
const noteRoutes = require("./routes/noteRoutes");
// const { createNote } = require("./controllers/notesController");

app.use(express.json())
app.use("/api",noteRoutes)

app.listen(3000,()=>{
    console.log("Server is runing on PORT 3000")
})