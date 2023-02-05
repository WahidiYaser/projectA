import express from "express";
import UserModel from "./usersModel";
import bcrypt from "bcrypt";
// const saltRounds = 10;
export async function getAllUsers(req: express.Request, res: express.Response) {
    try {
        const usersDB = await UserModel.find();
        if (!usersDB) throw new Error("no data was found");
        res.send({ success: true, usersDB })
    } catch (error) {
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
        if(!isMatch) throw new Error("passord is INCORRECT");
        
        res.send({ ok: true, msg: `welcome back ${email}` });
    } catch (error: any) {
        res.status(500).send({ ok: false, error: error.message });
    }
}

export async function updatePassowrdById(req: express.Request, res: express.Response) {
    try {
        const userDB = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send({ ok: true, userDB });
    } catch (error: any) {
        res.status(500).send({ ok: false, error: error.message })
    }
}