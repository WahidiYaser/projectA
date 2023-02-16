"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postsCtrl_1 = require("./postsCtrl");
const router = express_1.default.Router();
router
    .get("/get-all-posts", postsCtrl_1.getAllPosts)
    .get("/delete-all-posts", postsCtrl_1.DeleteAllPosts)
    .post("/add-post", postsCtrl_1.addPost);
exports.default = router;
