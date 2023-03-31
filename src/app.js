import express from 'express';
import mongoose from 'mongoose';
import studentsRouter from './routes/students.router.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD; 

app.listen(8080, () => {
    console.log("Listening on port 8080");
});

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@practicaestudiantes.4ckqw6x.mongodb.net/?retryWrites=true&w=majority`
)

app.use("/api/students", studentsRouter);