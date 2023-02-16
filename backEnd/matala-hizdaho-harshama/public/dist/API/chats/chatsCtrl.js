"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllChatsByUsers = exports.UpdateChat = void 0;
const chatsModel_1 = __importStar(require("./chatsModel"));
const usersModel_1 = __importDefault(require("../users/usersModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
function UpdateChat(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { myMessage } = req.body;
            const { friendID, userID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const decodedFriendId = jwt_simple_1.default.decode(friendID, secret);
            const { userId } = decodedUserId;
            const { friendId } = decodedFriendId;
            const { error } = chatsModel_1.ChatValidation.validate({ chatUserID: userId, chatFriendID: friendId, chatMsg: myMessage });
            if (error)
                throw new Error("validation failed at UpdateChat chatsCTRL");
            const chatDB = yield chatsModel_1.default.findOne({ chatUserID: userId, chatFriendID: friendId });
            // const userDB = await UserModel.findById(userId);
            // console.log(chatDB!);
            if (!chatDB) {
                const chatDB2 = new chatsModel_1.default({ chatUserID: userId, chatFriendID: friendId, chatMsg: { msg: myMessage } });
                yield chatDB2.save();
                yield usersModel_1.default.findByIdAndUpdate(userId, { chatsID: chatDB2.id });
                yield usersModel_1.default.findByIdAndUpdate(friendId, { chatsID: chatDB2.id });
            }
            else {
                yield chatsModel_1.default.updateOne({ chatUserID: userId, chatFriendID: friendId }, { $push: { chatMsg: { msg: myMessage } } });
            }
            // console.log((chatDB?._id)?.getTimestamp());
            // console.log(chatDB!.chatMsg[chatDB!.chatMsg.length-1]);
            res.send({ success: true, msg: "message saved to DB" });
        }
        catch (error) {
            res.status(500).send({ sucess: false, msg: "failed to save message to DB" });
        }
    });
}
exports.UpdateChat = UpdateChat;
function getAllChatsByUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { friendID, userID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const decodedFriendId = jwt_simple_1.default.decode(friendID, secret);
            const { userId } = decodedUserId;
            const { friendId } = decodedFriendId;
            const chatDB = yield chatsModel_1.default.findOne({ chatUserID: userId, chatFriendID: friendId });
            const friendChatDB = yield chatsModel_1.default.findOne({ chatUserID: friendId, chatFriendID: userId });
            // if (!chatDB && !friendChatDB) throw new Error("no chats yet between them, (error at getAllChatsByUsers at chatsCTRL)");
            // const chatMsgFriend = friendChatDB?.chatMsg;
            res.send({ success: true, chatDB, friendChatDB });
        }
        catch (error) {
            res.status(500).send({ sucess: false, error: error.message });
        }
    });
}
exports.getAllChatsByUsers = getAllChatsByUsers;
