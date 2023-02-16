import express from "express";
import ChatModel, { ChatValidation } from "./chatsModel";
import UserModel from "../users/usersModel";
import Jwt from "jwt-simple";


export async function UpdateChat(req: express.Request, res: express.Response) {
    try {
        const { myMessage } = req.body;
        const { friendID, userID } = req.cookies;
        const secret = process.env.JWT_SECRET;
        const decodedUserId = Jwt.decode(userID, secret!);
        const decodedFriendId = Jwt.decode(friendID, secret!);
        const { userId } = decodedUserId;
        const { friendId } = decodedFriendId;
        const { error } = ChatValidation.validate({ chatUserID: userId, chatFriendID: friendId, chatMsg: myMessage });
        if (error) throw new Error("validation failed at UpdateChat chatsCTRL");
        const chatDB = await ChatModel.findOne({ chatUserID: userId, chatFriendID: friendId });
        // const userDB = await UserModel.findById(userId);
        // console.log(chatDB!);
        if (!chatDB) {
            const chatDB2 = new ChatModel({ chatUserID: userId, chatFriendID: friendId, chatMsg: { msg: myMessage } });
            await chatDB2.save();
            await UserModel.findByIdAndUpdate(userId, { chatsID: chatDB2.id });
            await UserModel.findByIdAndUpdate(friendId, { chatsID: chatDB2.id });
        } else {
            await ChatModel.updateOne({ chatUserID: userId , chatFriendID: friendId }, { $push: { chatMsg: { msg: myMessage } } });
        }
        // console.log((chatDB?._id)?.getTimestamp());
        // console.log(chatDB!.chatMsg[chatDB!.chatMsg.length-1]);
        res.send({ success: true, msg: "message saved to DB" });
    } catch (error) {
        res.status(500).send({ sucess: false, msg: "failed to save message to DB" });
    }
}

export async function getAllChatsByUsers(req: express.Request, res: express.Response) {
    try {
        const { friendID, userID } = req.cookies;
        const secret = process.env.JWT_SECRET;
        const decodedUserId = Jwt.decode(userID, secret!);
        const decodedFriendId = Jwt.decode(friendID, secret!);
        const { userId } = decodedUserId;
        const { friendId } = decodedFriendId;

        const chatDB = await ChatModel.findOne({ chatUserID: userId, chatFriendID: friendId });
        const friendChatDB = await ChatModel.findOne({ chatUserID: friendId, chatFriendID: userId });

        // if (!chatDB && !friendChatDB) throw new Error("no chats yet between them, (error at getAllChatsByUsers at chatsCTRL)");
        // const chatMsgFriend = friendChatDB?.chatMsg;
        res.send({ success: true, chatDB, friendChatDB });
    } catch (error: any) {
        res.status(500).send({ sucess: false, error: error.message });
    }
}

