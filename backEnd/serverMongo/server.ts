import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
// const PORT = 5000;

dotenv.config();

const mongodb_uri = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.set("strictQuery", true);
mongoose.connect(mongodb_uri!).then(res =>{
    console.log("connected to DB");
}).catch(err=>{
    console.log("At mongoose connection:");
    console.error(err.message);
})

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

import usersRoutes from "./API/users/usersRoutes"
app.use("/api/v1/users", usersRoutes);

app.listen(PORT, ()=>{
    console.log(`active at port: ${PORT}`)
});