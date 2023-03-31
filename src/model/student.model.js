import mongoose from "mongoose";

const studentsCollection = "students";

const studentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    citizenId: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    
});

export const studentModel = mongoose.model(studentsCollection, studentSchema); 