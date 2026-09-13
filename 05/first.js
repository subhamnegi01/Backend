const express = require("express")
const app = express()

app.use("/user", (req, res)=>{
    res.send("Subham")
})


app.listen(5000, ()=>{
    console.log("Server is running on port 5000")
})