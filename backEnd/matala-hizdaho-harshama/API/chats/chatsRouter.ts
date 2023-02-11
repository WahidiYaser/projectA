import express from "express";
import {UpdateChat} from "./chatsCtrl";

const router = express.Router();

router
.put("/update-chat", UpdateChat);

export default router;