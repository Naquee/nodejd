// const { json } = require("express");
// const express=require("express")
// const fs=require("fs")

// const app = express();

// app.use(express.json())

// app.get("/", (req,res) => {
//     res.write("Welcome to our server")
//     res.end()
// })

// // app.get("/", (req,res) => {
// //    const readStream=fs.createReadStream("./data.txt", {encoding:"utf-8"})
// //    readStream.pipe(res)
// // })

// app.get("/profile", (req,res) => {
//     res.write("Welcome to Profile Page")
//     res.end()
// })

// app.post("/uploaddata", (req,res) => {
//     fs.appendFileSync("./data.txt",JSON.stringify(req.body), {encoding:"utf-8"})
//     res.send("thanks")
// })

// app.get("/profile") 

// app.listen(8500, () => {
//     console.log("Listen on PORT 8500")
// })






const { json } = require("express");
const express=require("express")
const fs=require("fs")
const app = express();
app.use(express.json())
app.get("/", (req,res) => {
    res.send("Welcome to our server")   
})
app.get("/products", (req,res) => {
    // const {price} = req.query
    const data = fs.readFileSync("./db.json", {encoding:"utf-8"})
    const parsedData = JSON.parse(data)
    const products=parsedData.products
    console.log(products)

    res.send(products)
})
app.get("/products/:id",(req,res) => {
    const {id} =req.params
    res.send("here is your products" + id)
})
app.post("/addproducts", (req,res) => {
    const file=fs.readFileSync("./db.json",{encoding:"utf-8"})
    let parsedFile=JSON.parse(file);
    parsedFile.products.push(req.body)

    console.log(parsedFile)

    parsedFile=JSON.stringify(parsedFile)


    fs.writeFileSync("./db.json", parsedFile, {encoding:"utf-8"})
    res.send("Your products was added")
})

app.listen(8500, () => {
    console.log("Listen on PORT 8500")
})



