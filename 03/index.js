const fs = require('fs');

let a= 10;
let b = "Hello world";

console.log(b)

function sum(a,b){
    return (a+b);
}

fs.readFile("./data.json", "utf-8", (err, res) => {
        console.log(res)
    })


setTimeout(() => {
    console.log("Hello India")
}, 3000);

console.log(a)
console.log(sum(10,20))