// const express=require("express")
// const fs=require("fs")

// const app=express();

// //Function --> which access to request,object , response object nad next();

// app.use((req,res,next) => {
//     // console.log("a")
//     //startTime
//     const startTime=new Date().getTime();
//     console.log(startTime)
//     // console.log(`The method  is ${req.method} and the URL is ${req.url}`)
//     next();
//     //endTime
//     const endTime=new Date().getTime();
//     console.log(endTime)

//     console.log(endTime-startTime + "ms")
//     // console.log("z")
// })

// app.get("/",(req,res) => {
//     // console.log(req.url)
//     res.send("Welcome")
    
// })

// app.get("/about",(req,res) => {
//     const file=fs.readFileSync("./package-lock.json",{encoding:"utf-8"})
//     setTimeout(() => {
//         res.send(file)
//     },1000)
//     // res.send("Welcome To about")
    
// })


// app.get("/contact",(req,res) => {
//     // console.log("1")
//     // console.log(req.url)
//     res.send("Welcome To contact...")
    
// })

// app.listen(8080, () =>{
//     console.log("Listen on port 8080")
// })





// callback function -> any function that is passed as an arguments to other function is called as cb

// custom middlewear

const express=require("express")
const fs=require("fs")
const app=express();
const { messgesRouter}=require("./routes/messages.route")
const {employeesRouter} =require("./routes/employees.route")
const cors=require("cors")

app.use(cors())
app.use(express.json())
app.use(express.text())


app.get("/",(req,res) => {
    res.send("Welcome")  
})

app.get("/about",(req,res) => {
  res.send("Welcome to about page")  
})

app.use("/messages",messgesRouter)

app.use("/employees", employeesRouter)


app.get("/contact",(req,res) => {
   
    res.send("Welcome To contact...")
    
})

app.listen(8080, () =>{
    console.log("Listen on port 8080")
})



// function printHello(){
//     console.log("Hello")
// }

// function printBye(){
//     console.log("By")
// }

// function printMsg(){
//     console.log("a")
//     printHello();
//     printBye();
//     console.log("z")
// }
// printMsg();



// function printHello(){
//     console.log("Hello")
// }

// function printBye(){
//     console.log("By")
// }

// function printMsg(){
//     console.log("a")
//     printHello();
//     printBye();
//     console.log("z")
// }
// printMsg();