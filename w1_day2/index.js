// const http= require("http")


// const server =http.createServer((req,res) => {
//     console.log(req)
//     res.write("Welcome to Bhopal live")
//     res.end()
// })

// server.listen(5000)


// const http= require("http")


// const server =http.createServer((req,res) => {
    
//     if(req.url==="/posts"){
//         res.end("here are you posts")
//     }
//     else if(req.url==="/todos"){
//         res.end("here are your Todo")
//     }
//     res.end("Welcome to Bhopal live server")
    
// })

// server.listen(5000)




// const http= require("http")


// const server =http.createServer((req,res) => {
    
//     if(req.url==="/posts"){
//       return res.end(JSON.stringify([1,2,3,4,5,6]))
//     }
//     else if(req.url==="/todos"){
//        return res.end("here are your Todo")
//     }
//     res.end("Welcome to Bhopal live server")
    
// })

// server.listen(5000)



// const http= require("http")


// const server =http.createServer((req,res) => {
    
//     if(req.url==="/posts"){
//       return res.end(JSON.stringify([1,2,3,4,5,6]))
//     }
//     else if(req.url==="/"){
//         res.setHeader("content-type", "text/html")
//        return res.end("<h1>Hello Home page</h1>")
//     }
//     res.end("Welcome to Bhopal live server")
    
// })

// server.listen(5000)



// const http= require("http")
// const fs = require("fs")


// const server =http.createServer((req,res) => {
    
//     if(req.url==="/posts"){
//         const posts=fs.readFileSync("./post.json", {encoding:"utf-8"})
//         res.setHeader("content-type","application/json")
//       return res.end(JSON.stringify(posts))
      
//     }
//     else if(req.url==="/"){
//         res.setHeader("content-type", "text/html")
//        return res.end("<h1>Hello Home page</h1>")
//     }
//     res.end("Welcome to Bhopal live server")
    
// })

// server.listen(5000)



const http= require("http")
const fs = require("fs")


const server =http.createServer((req,res) => {
    if(req.method === "GET"){
        if(req.url==="/posts"){
            const posts=fs.readFileSync("./post.json", {encoding:"utf-8"})
            res.setHeader("content-type","application/json")
          return res.end(JSON.stringify(posts))
          
        }
        else if(req.url==="/"){
            res.setHeader("content-type", "text/html")
           return res.end("<h1>Hello Home page</h1>")
        }
        else{
           return res.end("Invalid Route")
        }

    }
    else if(req.method==="POST"){
        if(req.url==="/uploaddata"){
            
        }
    }
    
 
    
})

server.listen(5000)