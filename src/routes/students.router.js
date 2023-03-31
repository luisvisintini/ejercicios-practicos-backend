import { Router } from "express";
import { studentModel } from "../model/student.model.js";

const router = Router();

router.get("/", async (req, res) => {
    
    try {
        let students = await studentModel.find();
        res.send({ status: "Success", payload: students });
    } catch (error) {
        console.log(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const { first_name, last_name, age, citizenId, course, score } = req.body;

        if( !first_name || !last_name || !age || !citizenId || !course || !score ) {
            return res 
                .status(400)
                .send({ status: "error", error: "missing properties" });
        }

        const student = {
            first_name,
            last_name,
            age,
            citizenId,
            course,
            score,
        };

        const studentCreated = await studentModel.create(student);

        return res.send({ status: "success", payload: studentCreated });
    } catch (error) {
        console.log(error);
    }
});

router.put("/:studentID", async (req, res) => {
    try {
        const { studentID } = req.params;
        const studentUpdate = req.body;

        if( !studentUpdate ) {
            return res
                .status(400)
                .send({ status: "error", error: "missing information" });
        }

    const newStudentUpdate = await studentModel .updateOne({ _id: studentID }, studentUpdate);

    return res.send({ status: "success", payload: newStudentUpdate });

    } catch (error) {
        console.log(error);
    }
});

router.delete("/:studentID", async (req, res) => {
    try {
        const { studentID } = req.params;
        const studentDelete = await studentModel.deleteOne({ _id: studentID });
        
        return res.send({ status: "success", payload: studentDelete });
        
    } catch (error) {
        console.log(error);
    }
});

export default router;
