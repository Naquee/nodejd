const express= require("express")

const {connection , StudentModel} = require("./db")

const app = express();

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Welcome to HomePage")
})

app.get("/about", (req,res) => {
    res.send("welcome To AboutPage")
})

app.get("/student", async (req,res) => {
    const result = await StudentModel.find()
    res.send(result)
})

app.post("/addstudent", async (req,res) => {
    const data=req.body;
    const student = new StudentModel(data)
    await student.save()
    res.send(student)
})


app.listen(8080, async () => {
    try{
        await connection
        console.log("Connected to DB Successful")
    }
    catch(err){
        console.log("Error connecting to db")
        console.log(err)
    }
    console.log("listen to 8080")
})