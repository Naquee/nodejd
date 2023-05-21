const mongoose = require("mongoose")
// jsonweb
const noteSchma = new mongoose.Schema({
    Heading : {type: String,required : true},
    Note : {type : String, required : true},
    Tag : {type : String , required :true},
    userId : {type : String, required : true}
})

const NoteModel = mongoose.model("note", noteSchma) 

module.exports = {
    NoteModel
} 