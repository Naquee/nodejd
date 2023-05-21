const express = require("express")
const fs = require("fs")
const show = require("dns")
const app = express()
app.use(express.json())
let url;

app.post("/contact",(req,res)=>{
    url = req.body.website_name
    show.lookup(url, (err, addresses, des)=> {
        res.send(addresses);
    });
    
})

app.get("/products",(req,res)=>{
    const data = fs.readFileSync("./db.json",{encoding:"utf-8"})
    const parsedData = JSON.parse(data)
    const products = parsedData.products
    console.log(products)
    res.send(products)
})

app.post("/products/create",(req,res)=>{
    const payload = req.body
    const data = fs.readFileSync("./db.json",{encoding:"utf-8"});
    const parsedData = JSON.parse(data)
    const products = parsedData.products
    const newData = [...products,payload]
    parsedData.products = newData
    const finalData = JSON.stringify(parsedData)
    fs.writeFileSync("./db.json",finalData,{encoding:"utf-8"})
    res.send("Data created successfully")
})

app.delete("/products/:id",(req,res)=>{
    const {id} = req.params;
    const data = fs.readFileSync("./db.json",{encoding:"utf-8"});
    parsedData = JSON.parse(data)
    const products = parsedData.products
    const deleted = products.find((item)=>item.id === Number(id))
    const newData = products.filter((item)=>item.id !== Number(id))
    parsedData.products = newData
    const finalData = JSON.stringify(parsedData)
    console.log(deleted)
    if(deleted)
    {
        fs.writeFileSync("./db.json",finalData,{encoding:"utf-8"})
        res.send("deleted successfully")
    }else
    {
        res.send("The id not available")
    }
})

app.put("/products/:id",(req,res)=>{
    const id = req.params.id;
    const payload = req.body;
    const data = fs.readFileSync("./db.json",{encoding:"utf-8"});
    const parsedData = JSON.parse(data);
    const products = parsedData.products 
    const filterData = products.filter((item)=>item.id !== Number(id))
    const newData = [...filterData,payload]
    parsedData.products = newData
    const finalData = JSON.stringify(parsedData)
    fs.writeFileSync("./db.json",finalData,{encoding:"utf-8"})
    res.send("Data updated successfully")
})


app.listen(7000)