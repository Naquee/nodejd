const express = require("express");

const app = express();

// app.get("/", (req,res) => {
//     res.end("Welocome To HomePage")
// })

app.get("/", (req,res) => {
    res.send("Welocome To HomePage")
})

app.get("/webpage", (req,res) => {
    res.send("<h1>welcome webpage</h1>")
})

// app.get("/products", (req,res) => {
//     res.end(JSON.stringify([1,2,3,4,5,6]))
// })

app.get("/products", (req,res) => {
    res.send(([1,2,3,4,5,6]))
})




app.listen(8080), () => {
    console.log("Server started on http://localhost:8080");
}