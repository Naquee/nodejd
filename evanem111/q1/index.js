const {json}=require("express")
const express=require("express")

const fs=require("fs");
const app=express();
app.use(express.json())

app.get("/",(req,res) => {
    const data=fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedData=JSON.parse(data)
    const products=parsedData.products
    res.send(products)
})

app.post("/products",(req,res) => {
    const file=fs.readFileSync("./db.json",{encoding:"utf-8"})
    let parsedFile=JSON.parse(file)
    parsedFile.products.push(req.body)
    res.send(parsedFile)
    parsedFile=JSON.stringify(parsedFile)

    fs.writeFileSync("./db.json",parsedFile,{encoding:"utf-8"})
    res.send("Products added")
})
app.listen(7000,() => {
    console.log("your port Running 7000")
})