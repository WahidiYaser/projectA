import express from "express";
import UserModel from "./usersModel";
import bcrypt from "bcrypt";

export async function getUserByCookie(req: express.Request, res: express.Response) {
    try {
        const { userID } = req.cookies;
        if (!userID) throw new Error("no user found in cookies");
        const { userId } = userID;
        const userDB = await UserModel.findById(userId);
        if (!userDB) throw new Error(`no user in data base with that id ${userId}`);
        res.send({ success: true, userDB });
    } catch (error:any) {
        res.status(500).send({ success: false, error });
    }
}

export async function register(req: express.Request, res: express.Response) {
    try {
        const { email, password } = req.body;
        // const userDB = UserModel.create({email, password});    this another way to create new data/user
        // const salt = bcrypt.genSaltSync(saltRounds);
        // const hash = bcrypt.hashSync(password, salt);
        const hash2 = bcrypt.hashSync(password, 10);

        const userDB = new UserModel({ email, password: hash2 });
        await userDB.save();
        if (!userDB) throw new Error("no user was created");
        
        const cookie = { userId: userDB._id };
        res.cookie("userID", cookie);

        res.send({ ok: true, msg: "new user was created" });
    } catch (error) {
        res.status(500).send({ success: false, error })
    }
}

export async function login(req: express.Request, res: express.Response) {
    try {
        const { email, password } = req.body;
        const userDB = await UserModel.findOne({ email });
        if (!userDB) throw new Error("email doesn't exist");

        const isMatch = await bcrypt.compare(password, userDB.password!);
        if (!isMatch) throw new Error("passord is INCORRECT");

        const cookie = { userId: userDB._id };
        res.cookie("userID", cookie);

        res.send({ ok: true, msg: `welcome back ${email}` });
    } catch (error: any) {
        res.status(500).send({ ok: false, error: error.message });
    }
}

export async function updateUserPassword(req: express.Request, res: express.Response) {
    try {
        const {userID} = req.cookies;
        if(!userID) throw new Error("no user is login in the cookies");
        const{userId} = userID;
        console.log(req.body);

        const {password} = req.body;
        const hash = bcrypt.hashSync(password, 10);

        const userDB = await UserModel.findByIdAndUpdate(userId, {password: hash}, {new: true});
        if (!userDB) throw new Error(`no user in data base with that id: ${userId}`);
        res.send({ok: true, userDB});
    } catch (error: any) {
        res.status(500).send({ok: false, error: error.message})
    }
}

export async function deleteUserByCookie(req: express.Request, res: express.Response){
    try {
        const {userID} = req.cookies;
        if(!userID) throw new Error("userID not Found");
        const {userId} = userID;
        const userDB = await UserModel.findByIdAndDelete(userId);
        if(!userDB)throw new Error("no userDB created at deleteUserByCookie at usersCtrl");
        res.send({ok: true, userDB});
    } catch (error) {
        res.status(500).send({ok: false, error});
    }
}