"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatValidation = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const ChatSchema = new mongoose_1.default.Schema({
    chatUserID: String,
    chatFriendID: String,
    chatMsg: [{
            msg: String
        }]
});
const ChatModel = mongoose_1.default.model("chats", ChatSchema);
exports.default = ChatModel;
exports.ChatValidation = joi_1.default.object({
    chatUserID: joi_1.default.string().required(),
    chatFriendID: joi_1.default.string().required(),
    chatMsg: joi_1.default.required()
});
