const fs = require("fs")

// fs.writeFile("dummy.txt","Happy Janmdin sirrrr",(err)=>{
//     if(err)console.log(err)
//     else(
//     console.log("File created successfully"))
// })

// fs.appendFile("dummy.txt","Sir party kb de rhe hooo",(err)=>{
//     if(err)console.log(err)
//     else console.log("SIR PARTYyyy!")
// })

// fs.readFile("dummy.txt","utf-8",(err,res)=>{
//     if(err)console.log(err)
//     else{
// console.log(res)};
    
// })

fs.unlink("dummy.txt", (err)=>{
    if(err)console.log(err)
    else{
console.log("File deleted successfully")}
})