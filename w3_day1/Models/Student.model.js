const mongoose= require("mongoose")
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,         // {type : Number, required : true},
    course: String,
})

const Student = mongoose.model("student", studentSchema)

module.exports = {Student}