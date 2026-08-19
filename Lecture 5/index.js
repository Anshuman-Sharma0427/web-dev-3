// const os = require("os")

// console.log(os.platform())

// console.log(os.arch())

// //console.log(os.hostname())

// // console.log(os.version())

// console.log(os.uptime()) // time of laptop use in seconds.

// console.log(os.totalmem()/1024/1024/1024) // tell the RAM of laptop

// console.log(os.freemem()/1024/1024/1024) // how much RAM left in laptop

// console.log(os.cpus())

// console.log(os.cpus().length) // tells about no. of cores

//-----------------------------------------------------------------

// const fs = require("fs")

// fs.writeFile("data.txt", "Hello", (err)=>{
//     if(err)console.log(err)
//         else console.log("File Written")
// })
// it overwrite the file if exist with the same name.
//-----------------------------------------------------------------
// to read file there are three methods

// fs.readFile("data.txt","utf8",(err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// } )
//-----------------------------------------------------------------

// fs.appendFile("data.txt", " 3rd sem", (err)=>{
//     if(err) console.log(err)
//         else console.log("File Updated")
// })

//-----------------------------------------------------------------

// fs.unlink("data.txt", (err)=>{
//     if(err) console.log(err)
//         else console.log("File deleted Successfully")
// })

//-----------------------------------------------------------------
// const fs = require("fs")

// fs.writeFile("new.js", "Console.log('hello')", (err)=>{
//     if(err) console.log(err)
//         else console.log("New File created")
// })

// fs.appendFile("new.js", ";var x = 2",(err)=>{
//     if(err) console.log(err)
//         else console.log("Updated successfully")
// } )

// fs.readFile("new.js","utf8", (err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// })

// fs.unlink("new.js", (err)=>{
//     if(err) console.log(err)
//         else console.log("Now Deleted")
// })

//-----------------------------------------------------------------

// const fs = require("fs")

// const data = {name:"Anshuman",age: 18,roll_no: 313,course: "AI & ML",sem:3} 

// fs.writeFile("wb.json", JSON.stringify(data,["name","roll_no","sem"] , 5), (err)=>{
//     if(err) console.log(err)
//         else console.log("File Created")
// })
// here 5 written represents the identation.

// fs.appendFile("wb.json",JSON.stringify({name:"hh"},null,2),(err)=>{
//     if(err) console.log(err)
//         else console.log("Updated")
// })

// fs.unlink("wb.json", (err)=>{
//     if(err) console.log(err)
//         else console.log("Deleted")
// })

//-----------------------------------------------------------------

// const fs = require("fs")

// const data = {name:"Happy",course:"Btech",age:18}
// fs.writeFile("db.json",JSON.stringify([data],null,2) , (err)=>{
//     if(err) console.log(err)
//         else console.log("Created")
// })

// let newData = {name:"Madhav" , age:12 , post:"hosterler"}

// fs.readFile("db.json","utf8",(err,res)=>{
//     if(err) console.log(err)
//         else{
//     //console.log(res)
//     let temp = JSON.parse(res)
//     temp.push(newData)

//     fs.writeFile("db.json", JSON.stringify(temp,null,2), (err)=>{
//     if(err) console.log(err)
//         else console.log("File Updated")
// })
// }
// })

//-----------------------------------------------------------------

// const path = require('path')

// const file = path.join("home","data","user.json") // (home/data/user.json)local url , file explorer

// console.log(file)

//console.log(path.dirname("home/user/data/file.txt")) // directory name does not contain file name(base).

//console.log(path.basename("home/user/data/file.txt"))

//console.log(path.extname("home/user/data/file.txt")) // tells the extension of file 

// const fs = require("fs")
// const filePath = path.join("home","data","user","file.txt")

//console.log(filePath) // to get url , so we can create a directory

// fs.mkdir(path.dirname(filePath),{recursive:true},(err)=>{
//     if(err) console.log(err)
//         else{
//     fs.writeFile(filePath,"", (err)=>{
//         if(err) console.log(err)
//     })
// }
// })


//-----------------------------------------------------------------
// crypto 

// const crypto = require("crypto")

// let password1 = "Anshuman@234"
// let password2 = "Anshuman@234"

// let encrypt1 = crypto.createHash("sha256").update(password1).digest("hex")

// let encrypt2 = crypto.createHash("sha256").update(password2).digest("hex")

// console.log(encrypt1,"\n",encrypt2)


//-----------------------------------------------------------------
 const dns = require("dns")

 dns.lookup("google.com", (err,address,family)=>{
    console.log(address)
    console.log(family)
  })
