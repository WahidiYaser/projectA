"use strict";
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
exports.UpdateChat = void 0;
const chatsModel_1 = __importDefault(require("./chatsModel"));
const usersModel_1 = __importDefault(require("../users/usersModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
function UpdateChat(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { myMessage } = req.body;
            const { friendID, userID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const decodedFriendId = jwt_simple_1.default.decode(friendID, secret);
            const { userId } = decodedUserId;
            const { friendId } = decodedFriendId;
            const chatDB = yield chatsModel_1.default.findOne({ chatUserID: userId, chatFriendID: friendId });
            console.log(chatDB);
            if (!chatDB) {
                const chatDB2 = new chatsModel_1.default({ chatUserID: userId, chatFriendID: friendId, chatMsg: { msg: myMessage } });
                yield chatDB2.save();
                yield usersModel_1.default.findByIdAndUpdate(userId, { chatsID: chatDB2.id });
                yield usersModel_1.default.findByIdAndUpdate(friendId, { chatsID: chatDB2.id });
            }
            else {
                yield chatsModel_1.default.updateOne({ chatFriendID: friendId }, { $push: { chatMsg: { msg: myMessage } } });
            }
            console.log((_a = (chatDB === null || chatDB === void 0 ? void 0 : chatDB._id)) === null || _a === void 0 ? void 0 : _a.getTimestamp().toLocaleDateString());
            console.log(chatDB.chatMsg[chatDB.chatMsg.length - 1]);
            res.send({ success: true, msg: "message saved to DB" });
        }
        catch (error) {
            res.status(500).send({ sucess: false, msg: "failed to save message to DB" });
        }
    });
}
exports.UpdateChat = UpdateChat;
