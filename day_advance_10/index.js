const express = require("express")
const jwt = require("jsonwebtoken")
const {connection} = require("./config/db")

const {UserModel} = require("./models/User.model")
const app=express();

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/dashboard",(req,res)=>{
    const {token} = req.query;
    // UserModel.find({query})
    if(Number(token) === Math.random()){ 
        res.send("Some Important data")
    }
    else{
        res.send("please login")
    }
    
})

app.post("/signup",async(req,res) => {
    const {email,password} = req.body;
    const new_user = new UserModel({
        email : email,
        password : password
    })
    await new_user.save()
    res.send("signUp successfull")
})

app.post("/login",async (req,res) => {
    const {email,password} = req.body
    const result = await UserModel.findOne({email , password})
    console.log(result)
    if(result){
        const token = jwt.sign({ name: 'masai' }, 'abcd12345');
        // res.send(result)
        res.send({"msg" : "Login successful", "token": token})
    }
    else{
        res.send("Login Failed")
    }
    // res.send(result)
    // console.log(result)
})


app.listen(8080, async() => {
    try{
        await connection
        console.log("conncted to DB")
    }
    catch(err){
        console.log("Error Connection to DB")
        console.log(err)

    }
    console.log("listen on PORT 8080")
})

