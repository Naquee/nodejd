const http=require("http");
const fs=require("fs")

const server=http.createServer((req,res) => {

    // if(req.method === "POST")

if(req.method === "GET")
{
    
}

if(req.url === "/posts")
{
    // return res.end("i am post")

    // return res.end(JSON.stringify([1,2,3,4,5]))

    // res.setHeader("content-type","application/json")

    console.log(req.method)
const posts=fs.readFileSync("./posts.json",{encoding:"utf-8"})

res.setHeader("content-type","application/json")
    return res.end(JSON.stringify(posts))




}
// else if(req.url === "/")
// {
//     res.setHeader("content-type","text/html")
//     return res.end ("<h2>Welcome to home page</h2>")
// }
else 
{
   return res.end("Invalid route")
}
    
})

server.listen(8080, () => {

    console.log("server started on localhost:8080/ ")
})

