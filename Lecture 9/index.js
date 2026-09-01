// Express - lightweight framework for nodejs
//npm i express.  losck.json has priority over .json 
//-----------------------------------------------------------------
const express = require("express")
const app = express(); 
app.use(express.json()) // it will pass data in json format 
// app.get("/",(req,res)=>{
//     return res.status(200).send("hello world")
// })
//-----------------------------------------------------------------
// CRUD Operation 
let students = ["Alex" , "Joy" ,"Sara" , "cvbn"]
app.get("/student",(req,res)=>{
    return res.status(200).send(students)
})

app.post("/student",(req,res)=>{
    let data = req.body.name
    students.push(data)
    res.status(200).send("Student Added Successfully")
})

app.put("/student/:index",(req,res)=>{
    let ind = req.params.index
    let data = req.body.name

    students[ind] = data
    res.status(200).send("Student updated successfully")
})

app.delete("/student/:index",(req,res)=>{
    let ind = req.params.index
    students.splice(ind,1)
    res.status(200).send("Deleted")
})

app.listen(3000,()=>{
    console.log("Server is running on Port : 3000")
})
//-----------------------------------------------------------------

