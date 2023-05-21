const http=require("http");
const server = http.createServer((req , res) => {
    //handler
    // res.write("Hello")
    // res.write("World")
    res.end("!Hello")
})

server.listen(8080 , () => {
    console.log("server started on localhost:8080/")
})