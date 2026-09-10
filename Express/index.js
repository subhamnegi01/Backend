const express = require("express")
const app = express()

const BookStore = [
    {id : 1, name: "Harry Porter",author: "DevFlux" },
    {id : 2, name: "Friends",author: "Vikas" },
    {id : 3, name: "Katha",author: "Premchand" },
    {id : 4, name: "HalfGirlFriend",author: "Chetan" }
]


app.use("/about", (req, res)=>{
    res.send({name: "Coder Army", age: 2, email: "example@email.com", money: 1000, isActive: true})
})

app.use("/contact", (req, res)=>{
    res.send("<h1>Contact us at: example@email.com</h1>")
})

app.use("/details", (req, res)=>{
    res.send("<h1>We are a team of developers</h1>")
})



app.get("/book", (req, res)=>{
    res.send(BookStore)
})

app.get("/book/:id", (req, res)=>{
    
    // console.log(req.params)
    const id = parseInt(req.params.id)
    const book = BookStore.find(info => info.id === id)
    res.send(book)
})



app.get("/user",(req, res)=>{
    res.send({name: "Subham"})
} )




// Parse incoming JSON requests
app.use(express.json())

app.post("/user", (req, res)=>{

    console.log(req.body)
    res.send("Data received successfully")
})




app.listen(4000, ()=>{
    console.log("Server is running on port 4000")
})