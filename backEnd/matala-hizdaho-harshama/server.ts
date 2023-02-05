import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const mongo_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.set("strictQuery", true);
mongoose.connect(mongo_uri!).then(res=>{
    console.log(`connected to DB`);
}).catch(err=>{
    console.log("at mongoose connection:");
    console.log(err.message);
});

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

import usersRouter from "./API/users/usersRouter"
app.use("/api/v1/users", usersRouter);

app.listen(PORT, ()=>{
    console.log(`connected at port: ${PORT}`);
});