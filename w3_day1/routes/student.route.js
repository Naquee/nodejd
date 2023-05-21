const {Router} = require("express")
const StudentController = require("../controllers/student.controller")
const studentRouter = Router();

studentRouter.get("/", StudentController.getStudent)


studentRouter.get("/:id",StudentController.getStudentById)

studentRouter.post("/addStudent",StudentController.postStudent)



module.exports = {studentRouter}