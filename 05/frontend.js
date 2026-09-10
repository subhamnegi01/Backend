fetch("http://localhost:4000/user")


const response = await fetch("http://localhost:4000/user", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: "Subham", age: 22, email: "subham@example.com" })
})