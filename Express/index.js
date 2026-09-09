const express = require("express")
const app = express()

app.use("/about", (req, res)=>{
    res.send({name: "Coder Army", age: 2, email: "example@email.com", money: 1000, isActive: true})
})

app.use("/contact", (req, res)=>{
    res.send("<h1>Contact us at: example@email.com</h1>")
})

app.use("/details", (req, res)=>{
    res.send("<h1>We are a team of developers</h1>")
})

app.get("/user",(req, res)=>{
    res.send({name: "Subham"})
} )

app.listen(4000, ()=>{
    console.log("Server is running on port 4000")
})