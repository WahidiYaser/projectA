import express from "express";
import PostModel from "./postsModel";
import UserModel from "../users/usersModel";
import jwt from "jwt-simple";

export async function addPost(req: express.Request, res: express.Response) {
    try {
        const { userID } = req.cookies;
        const secret = process.env.JWT_SECRET;
        const decodedUserId = jwt.decode(userID, secret!);
        const { userId } = decodedUserId;
        const { imgToPost, textToPost } = req.body;

        const userDB = await UserModel.findById(userId);
        const postDB = new PostModel({ userId,userEmail: userDB!.email , postText: textToPost, postImg: imgToPost });
        await postDB.save();

        res.send({ postSaved: true, postDB });

    } catch (error: any) {
        res.status(500).send({ postSaved: false, error: error.message });
    }
}

export async function getAllPosts(req: express.Request, res: express.Response) {
    try {
        const postsDB = await PostModel.find();
        if (!postsDB) throw new Error("no body published a post yet in th website, getAllPosts, postsCtrl");
        res.send({ postSaved: true, postsDB });
    } catch (error: any) {
        res.status(500).send({ postSaved: false, error: error.message });
    }
}

export async function DeleteAllPosts(req: express.Request, res: express.Response) {
    try {
        const postsDB = await PostModel.find();
        if (postsDB) {
            postsDB.forEach(async (postDB: any) => {
                await PostModel.findByIdAndRemove(postDB._id);
            });
        }else throw new Error("no posts found in the website, DeleteAllPosts, postsCtrl");
        res.send({ postsDeleted: true, postsDB });
    } catch (error: any) {
        res.status(500).send({ postSaved: false, error: error.message });
    }
}