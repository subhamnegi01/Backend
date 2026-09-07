const http = require('http')


// res.end("Hello Coder Army")

const server = http.createServer((req, res)=>{
    
    if (req.url === "/"){
        res.end("Hello Coder Army")
    }
    else if(req.url=== "/contact"){
        res.end("Contact us at: example@email.com")
    }
    else if(req.url=== "/about"){
        res.end("We are a team of developers")
    }
    else{
        res.end("404 Not Found")
    }
})


server.listen(4001, ()=>{
    console.log("Server is running on port 4001")
})