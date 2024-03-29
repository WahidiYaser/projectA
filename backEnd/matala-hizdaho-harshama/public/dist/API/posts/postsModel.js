"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    userId: String,
    userEmail: String,
    postText: String,
    postImg: String
});
const PostModel = mongoose_1.default.model("posts", postSchema);
exports.default = PostModel;
