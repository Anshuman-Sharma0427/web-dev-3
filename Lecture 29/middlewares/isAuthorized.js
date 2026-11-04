const isAuthorized = (req,res,next)=>{
    let token = req.headers.cookie;

    if((!token) || (token!=123987)){
        return res.status(401).send("kon h bhai tu")
    }
    next()
}

const isloggedIn = (req,res,next)=>{
    let login = true;

    if(!login){
        return res.status(401).send("Tu yaha pr login nhi h")
    }

    next()
}
module.exports = {isAuthorized,isloggedIn}

// middle ware chaining