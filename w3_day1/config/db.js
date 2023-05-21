// const mongoose = require("mongoose")

// const connection = mongoose.connect("mongodb://127.0.0.1:27017/web24")

// module.exports = {
//     connection
// }






const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://Naquee:alam@cluster0.oh0lkro.mongodb.net/?retryWrites=true&w=majority")

module.exports = {
    connection
}