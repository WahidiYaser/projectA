import mongoose from "mongoose";
import Joi from "joi";

const ChatSchema = new mongoose.Schema({
    chatUserID: String,
    chatFriendID: String,
    chatMsg: [{
        msg: String
    }]
});

const ChatModel = mongoose.model("chats", ChatSchema);

export default ChatModel;

export const ChatValidation = Joi.object({
    chatUserID: Joi.string().required(),
    chatFriendID: Joi.string().required(),
    chatMsg: Joi.required()
});