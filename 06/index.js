const express = require("express")
const app = express()

app.use(express.json())

const FoodMenu = [
    {id:1 , food: "Chowmein", category: "Chinese", price: 150},
    {id:2 , food: "Fried Rice", category: "Chinese", price: 120},
    {id:3 , food: "Pizza", category: "Italian", price: 250},
    {id:4 , food: "Pasta", category: "Italian", price: 200},
    {id:5 , food: "Burger", category: "Fast Food", price: 100},
    {id:6 , food: "Sandwich", category: "Fast Food", price: 80},
    {id:7 , food: "Tacos", category: "Mexican", price: 180},
    {id: 8, food: "Chiken Tikka", category: "Indian", price: 220},
    {id: 9, food: "Paneer Butter Masala", category: "Indian", price: 200},
    {id: 10, food: "Sushi", category: "Japanese", price: 300},
    {id: 11, food: "Mutton", category: "Mutton", price: 250},
    {id: 12, food: "Fish Curry", category: "Seafood", price: 220},
    {id: 13, food: "Lobster", category: "Seafood", price: 400},
    {id: 14, food: "Paneer", category: "Indian", price: 350},
]

const AddToCart = []

app.get("/food", (req, res)=>{
    res.status(200).send(FoodMenu)
})

app.use("/admin", (req, res, next)=>{
    const token = "ABCDEF"
    const Access = token === "ABCDEF" ? 1:0

    if(!Access){
        res.status(403).send("Access Denied")
        return
    }
    next()
})

app.get("/admin", (req, res)=>{
    const token = "ABCDEF"
    const Access = token === "ABCDEF" ? 1:0

    if(Access){
        FoodMenu.push(req.body)
        res.send("Food Added Successfully")
    }
    else{
        res.status(403).send("Access Denied")
    }
})


app.delete("/admin/:id", (req, res)=>{
    const token = "ABCDEF"
    const Access = token === "ABCDEF" ? 1:0

    if(Access){
        const id = parseInt(req.params.id)
        const index = FoodMenu.findIndex(item => item.id === id)
        if(index === -1){
            res.send("Food item does't present")
        } else {
            FoodMenu.splice(index, 1)
            res.send("Successfully Deleted")
        }
    }
    else{
        res.status(403).send("Access Denied")
    }
})

app.patch("/admin/:id", (req,res)=>{
    const token = "ABCDEF"
    const Access = token === "ABCDEF" ? 1:0

    if(Access){
        const id = parseInt(req.params.id)
        const index = FoodMenu.findIndex(item => item.id === id)
        if(index === -1){
            res.send("Food item does't present")
        } else {
            FoodMenu[index] = {...FoodMenu[index], ...req.body}
            res.send("Successfully Updated")
        }
    }
    else{
        res.status(403).send("Access Denied")
    }
})

app.post("/user/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const foodItem = FoodMenu.find(item => item.id === id)

    if(foodItem){
        AddToCart.push(foodItem)
        res.send("Food Added to Cart")
    }
    else {
        res.send("Food item does't present")
    }
});

app.delete("/user/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    const index = AddToCart.findIndex(item => item.id === id)

    if(index != -1){
        AddToCart.splice(index, 1)
        res.send("Food item removed from Cart")
    } else {
        res.send("Food item does't present in cart")
    }
});


app.get("/user/cart", (req,res)=>{
    res.send(AddToCart)

    if(AddToCart.length === 0){
        res.send("Cart is Empty")
    }
    else {
        res.send(AddToCart)
    }
});

app.get("/dummy", (req, res)=>{
    try{
    JSON.parse('{"name": "Subham"}')
    res.send("Hello Coder")
    }
    catch(err){
        res.send("Some error occured")
    }
})

app.listen(2000, ()=>{
    console.log("Server is running on port 2000")
})