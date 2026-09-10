const express = require("express")
const app = express()

const BookStore = [
    {id : 1, name: "Harry Porter",author: "DevFlux" },
    {id : 2, name: "Friends",author: "Vikas" },
    {id : 3, name: "Katha",author: "Premchand" },
    {id : 4, name: "HalfGirlFriend",author: "Chetan" }
]

app.use(express.json())



app.get("/book", (req, res)=>{
    res.send(BookStore)
})

app.get("/book/:id", (req, res)=>{
    
    // console.log(req.params)
    const id = parseInt(req.params.id)
    const book = BookStore.find(info => info.id === id)
    res.send(book)
})



app.post("/book", (req,res)=>{
    console.log(req.body)
    BookStore.push(req.body)
    res.send("Book added successfully")
})

app.patch("/book", (req, res)=>{
    console.log(req.body)

    const book = BookStore.find(info=> info.id === req.body.id)
    book.name = req.body.name
    res.send("Patch request received")
})



// Parse incoming JSON requests
app.use(express.json())


app.listen(4000, ()=>{
    console.log("Server is running on port 4000")
})