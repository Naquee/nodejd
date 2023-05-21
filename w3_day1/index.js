const express = require("express")
const {connection} = require("./config/db")
const {studentRouter}= require("./routes/student.route")
const {iaRouter}= require("./routes/ia.route")

const app = express();

app.use(express.json())


app.get("/", (req,res) => {
    res.send("API homePage , try other routes")
})

app.use("/students", studentRouter)

app.use("/ias", iaRouter)

app.listen(8008,async () => {
    try{
        await connection
    console.log("connection to DB Successsful")
    }
    catch(err){
        console.log("err")
    }
    console.log("listen at PORT at 8008")
})