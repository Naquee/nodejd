const mongoose=require("mongoose")

const connection = mongoose.connect("mongodb+srv://Naquee:alam@cluster0.arfhb4y.mongodb.net/?retryWrites=true&w=majority")

module.exports={
    connection
}