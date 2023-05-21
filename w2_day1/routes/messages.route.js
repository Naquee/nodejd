const express = require("express")

const messgesRouter = express.Router();

messgesRouter.post("/messages/add",(req,res) => {
    console.log(req.body)
    res.send("recived your message")
      
      
  })

  messgesRouter.get("/messages",(req,res) => {
    res.send("messages")  
  })

  messgesRouter.delete("messages/delete",(req,res) => {
    res.send("messages deleted")  
  })

  module.exports = {messgesRouter}