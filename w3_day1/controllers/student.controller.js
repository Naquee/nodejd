const {Student} = require("../Models/Student.model")

const getStudent = async(req,res) => {
    const student_data = await Student.find()
    res.send(student_data)
}

const getStudentById = async(req,res) => {
    const student_data = await Student.find({_id : req.params.id})
    res.send(student_data)
}

const postStudent = async(req,res) => {
    const payload = req.body;
    if(!payload.age || !payload.name || !payload.course){
        res.send("please send all valid Fields")
    }
    if(payload.course === "MERN") {
      await Student.insertMany([payload])
      res.send("Student data created successful")
    }
    else{
        res.send("please enter a valid course")
    }
}

const StudentController = {
    getStudent,
    getStudentById,
    postStudent
}

module.exports = StudentController