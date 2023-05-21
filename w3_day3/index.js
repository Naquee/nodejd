const express = require("express")
const jwt = require("jsonwebtoken")
const {connection} = require("./config/db")
const bcrypt = require('bcrypt')

const {UserModel} = require("./model/User.model")
const app = express();

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Home Page")
})

app.get("/dashboard", (req,res) => {
    // const {token} = req.query;

    const token = req.headers.authrization.split(" ")[1]
    console.log(token)

    try{
        var decoded = jwt.verify(token, 'abcd12345');
        const {email} = decoded
        res.send(`Welcome ${email}! here is dashborad data...`)
        console.log(email)
    }
    catch(err){
        console.log(err)
        res.send("please Login again")
    }
    
    // if(Number(token) === Math.random()) {
    //     res.send("Some Important Data")
    // }
    // else{
    //     res.send("please login")
    // }
    // res.send("its in progress...")
    
})

app.get("/reports", (req,res) => {
    res.send("Some important reports")
})


app.post("/signup", async(req,res) => {
    const {email , password} = req.body;
    bcrypt.hash(password, 5,  async function(err, hashed_password) {
        if(err){
            res.send("Something went wrong, please signup later")
        }
        const new_user = new UserModel({
            email : email,
            password : hashed_password
        })
        await new_user.save()
        res.send("Sign up successful")

    });
  
})

// const isAuth= false

app.post("/login",async (req,res) => {
    const {email, password}= req.body;
    // const new_password = "abcd" + password + 123
    const user = await UserModel.findOne({email})
    const hashed_password = user.password
    bcrypt.compare(password, hashed_password).then(function(result) {
        if(result){
            const token = jwt.sign({ email: email }, 'abcd12345');
        res.send({"msg" :  "Login successful","token" : token})
        }
        else{
            res.send("Login failed")
        }
    });
})


app.listen(8004, async () => {
    try{
        await connection
        console.log("connected to DB successful")
    }

    catch(err){
        console.log("Error connecting to DB")
        console.log(err)
    }
    console.log("listen on Port 8004")
})