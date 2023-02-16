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
    console.log("error at mongoose connection:");
    console.log(err.message);
});

app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

import usersRouter from "./API/users/usersRouter"
app.use("/api/v1/users", usersRouter);

import chatsRouter from "./API/chats/chatsRouter";
app.use("/api/v1/chats",chatsRouter);

import postsRouter from "./API/posts/postsRouter";
app.use("/api/v1/posts", postsRouter);

app.listen(PORT, ()=>{
    console.log(`connected at port: ${PORT}`);
});