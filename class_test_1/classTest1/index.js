const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("Request recieved\n");
    console.log("Requested URL",req.url)
    console.log("\nHeaders:",req.headers)




    if(req.url==="/home"){
        console.log("See the home page")
        console.log()

        res.write("<h1>This is home page</h1><br>");
        res.write("<p>Sir will provide question paper of mid and end term</p>")
        res.end()
    }
    else if(req.url==="/about"){
        console.log("See about page")
        console.log()


        res.write("<h1>I am AI and ML student</h1><br>");
        res.write("<p>This is about page</p>")
        res.end()
    }
    else if(req.url==="/contact"){
        console.log("You are on contact page now")
        console.log()

        res.write("<h1> This is contact page </h1><br>")
        res.write("<h3> Here you will get no contacts</h3><br>")
        res.write("<p>Study Hard bro don't look for contacts</p>")
        res.end()
    }
    else{
        res.statusCode=404;
        res.write("You'r URL is wrong")
        res.end()
    }
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

