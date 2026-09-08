const express = require("express")
const app = express()

app.use((req, res)=>{
    res.send({name: "Coder Army", age: 2, email: "example@email.com", money: 1000, isActive: true})
})

app.listen(4000, ()=>{
    console.log("Server is running on port 4000")
})