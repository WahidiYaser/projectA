"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatsCtrl_1 = require("./chatsCtrl");
const router = express_1.default.Router();
router
    .get("/get-all-chats", chatsCtrl_1.getAllChatsByUsers)
    .put("/update-chat", chatsCtrl_1.UpdateChat);
exports.default = router;
