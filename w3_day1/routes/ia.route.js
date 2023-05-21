const {Router} = require("express")
const {IA} = require("../Models/IA.Model")

const iaRouter = Router();

iaRouter.get("/", async (req,res) => {
    const ia_data = await IA.find()
    res.send(ia_data)
})

iaRouter.post("/addIA", async (req,res) => {
   const payload = req.body
   await IA.insertMany([payload])
   res.send("Inserted IA")


})

module.exports = {iaRouter}