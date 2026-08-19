const http = require("http")
// Whenever a client and server communicate we use http module.

//http.createServer()
// there is a method inside http which helps to create a server.

const server = http.createServer((req,res)=>{
    //res.write("<h1> Hello World </h1>")
    // res.write("<p> lhksdfkjdsgf </p>")
    //res.end() // use to end the request from frontend side
    // console.log(req.url)
    // res.end()

    // if (req.url ==="/"){
    //     res.write("<h1>Home Page </h1>")
    //     res.end()
    // }
    // if (req.url ==="/about"){
    //     res.write("<h1>About Page </h1>")
    //     res.end()
    // }
    // console.log(req.method)
    // res.end()

    // if(req.method==="GET"){
    //     res.write("<h1> GET Method</h1>")
    //     res.end()
    // }

    // if(req.method==="POST"){
    //     res.write("<h2>POST Method</h2>")
    //     res.end()
    // }
    // if(req.method==="DELETE"){
    //     res.write("<h2>DELETE Method</h2>")
    //     res.end()
    // }
    // if(req.method==="PUT"){
    //     res.write("<h2>PUT Method</h2>")
    //     res.end()
    // }

    // if(req.method==="GET" && req.url==="/user"){
    //     res.write("<h2> Retrieving Data</h2>")
    //     res.end()
    // }
    // if(req.method==="POST" && req.url==="/user"){
    //     res.write("<h2> Data Created </h2>")
    //     res.end()
    // }   
    // if(req.method==="PUT" && req.url==="/user"){
    //     res.write("<h2> Data Update </h2>")
    //     res.end()
    // }
    // if(req.method==="DELETE" && req.url==="/user"){
    //     res.write("<h2> Data Deleted </h2>")
    //     res.end()
    // }  
    
    // console.log(req.headers)
    // res.end()

    // if(req.headers==="token"){
    //     res.write(token)
    //     res.end()
    // }

    // if(req.headers==="host"){
    //     res.write(host)
    //     res.end()
    // }

    // console.log(req.headers.token)
    // console.log(req.headers.host)

    // res.end()

    // now how to send primary information. send information in chunks so server can stay free from overload

    let data = ""

    req.on("data",(chunk)=>{ // understand these two as listerners
        data+=chunk
    })

    req.on("end",()=>{
        console.log(data)
        res.end()
    })
    
    res.end()
})

server.listen(3000,()=>{
    console.log("Server is running on Port 3000")
})

// to check api we go toward postman or thundercloud