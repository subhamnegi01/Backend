const express = require("express")
const app = express()

app.use("/user", (req, res, next)=>{

    console.log(`${Date.now()} - ${req.method} - ${req.url}`)
    // console.log("Middleware 1")
    // res.send("Subham")
    next()
},
(req,res)=>{
    console.log("Hello")
    res.send("Hello Ji")
})


app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})