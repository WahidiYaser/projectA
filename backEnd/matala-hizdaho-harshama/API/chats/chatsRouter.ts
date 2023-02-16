import express from "express";
import {UpdateChat, getAllChatsByUsers} from "./chatsCtrl";

const router = express.Router();

router
.get("/get-all-chats", getAllChatsByUsers)
.put("/update-chat", UpdateChat);

export default router;