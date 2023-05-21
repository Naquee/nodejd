
const express = require("express")

const employeesRouter= express.Router();

employeesRouter.get("/employees", (req,res) => {
    res.send("employees data...")
})

module.exports={employeesRouter}