import express from "express";
import UserModel, { UserValidation } from "./usersModel";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";

export async function CheckIfUserConnected(req: express.Request, res: express.Response) {
    try {
        const { userID } = req.cookies;
        if (!userID) {
            res.send({ success: true, msg: "no user in cookies" })
        }
        else {
            const secret = process.env.JWT_SECRET;
            const decodedUserId = jwt.decode(userID, secret!);
            const { userId } = decodedUserId;

            const userDB = await UserModel.findById(userId);
            if (!userDB) throw new Error(`no user in data base with that id ${userId}`);
            res.send({ success: true, userDB });
        }
    } catch (error: any) {
        res.status(500).send({ success: false, error: error.message });
    }
}

export async function register(req: express.Request, res: express.Response) {
    try {
        const { email, password, repPassword, imageSrc } = req.body;
        if (!email || !password || !repPassword) throw new Error("couldn't get all fields from client");
        // const userDB = UserModel.create({email, password});    this another way to create new data/user
        // const salt = bcrypt.genSaltSync(saltRounds);
        // const hash = bcrypt.hashSync(password, salt);

        const { error } = UserValidation.validate({ email, password, repeatPassword: repPassword });
        if (error) throw new Error("problem with validation at register CTRL");

        const hash = bcrypt.hashSync(password, 10);

        const userDB = new UserModel({ email, password: hash, imageSrc });
        await userDB.save();
        if (!userDB) throw new Error("no user was created");

        const cookie = { userId: userDB._id };
        const secret = process.env.JWT_SECRET;
        const JWTCookie = jwt.encode(cookie, secret!);
        res.cookie("userID", JWTCookie);

        res.send({ registered: true, msg: "new user was created" });
    } catch (error: any) {
        res.status(500).send({ registered: false, error: error.message });
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
        const secret = process.env.JWT_SECRET;
        const JWTCookie = jwt.encode(cookie, secret!);
        res.cookie("userID", JWTCookie);

        res.send({ logging: true, msg: `welcome ${email}` });
    } catch (error: any) {
        res.status(500).send({ logging: false, error: error.message });
    }
}

export async function logOut(req: express.Request, res: express.Response) {
    try {
        res.clearCookie("userID");
        res.send({ loggedout: true });
    } catch (error: any) {
        res.status(500).send({ loggedout: false, error: error.message });
    }
}

export async function updateUserPassword(req: express.Request, res: express.Response) {
    try {
        const { userID } = req.cookies;
        if (!userID) throw new Error("no user is login in the cookies");
        const { userId } = userID;
        console.log(req.body);

        const { password } = req.body;
        const hash = bcrypt.hashSync(password, 10);

        const userDB = await UserModel.findByIdAndUpdate(userId, { password: hash }, { new: true });
        if (!userDB) throw new Error(`no user in data base with that id: ${userId}`);
        res.send({ ok: true, userDB });
    } catch (error: any) {
        res.status(500).send({ ok: false, error: error.message })
    }
}

export async function updateImageSrc(req: express.Request, res: express.Response) {
    try {
        const { userID } = req.cookies;
        const secret = process.env.JWT_SECRET;
        const decodedUserId = jwt.decode(userID, secret!);
        const { userId } = decodedUserId;
        console.log(req.body);
        const { imageSrc } = req.body;

        const userDB = await UserModel.findByIdAndUpdate(userId, imageSrc);
        if (!userDB) throw new Error(`usersCTRL, updateImageSrc, (if!userDB)`);
        res.send({ ok: true, userDB });
    } catch (error: any) {
        res.status(500).send({ ok: false, error: error.message })
    }
}

export async function deleteUserByCookie(req: express.Request, res: express.Response) {
    try {
        const { userID } = req.cookies;
        if (!userID) throw new Error("userID not Found");
        const { userId } = userID;
        const userDB = await UserModel.findByIdAndDelete(userId);
        if (!userDB) throw new Error("no userDB created at deleteUserByCookie at usersCtrl");
        res.send({ ok: true, userDB });
    } catch (error) {
        res.status(500).send({ ok: false, error });
    }
}

export async function getAllUsers(req: express.Request, res: express.Response) {
    try {
        const { userID } = req.cookies;
        if (!userID) throw new Error("no userID in the cookies at getAllUsers (ctrl)");
        const secret = process.env.JWT_SECRET;
        const decodedUserId = jwt.decode(userID, secret!);
        const { userId } = decodedUserId;
        const myUser = await UserModel.findById(userId);
        const usersDB = await UserModel.find();
        if (!usersDB || !myUser) throw new Error("myUser || usersDB is come back empty");
        res.send({ success: true, usersDB, myUser });
    } catch (error: any) {
        res.status(500).send({ success: false, error: error.message });
    }
}

export async function GetUserByEmail(req: express.Request, res: express.Response) {
    try {
        const { friendEmail } = req.params;
        const friendDB = await UserModel.findOne({ email: friendEmail });
        if (!friendDB) throw new Error("friendDB is empty at getUserByEmail AT (ctrl)");
        const cookie = { friendId: friendDB._id };
        const secret = process.env.JWT_SECRET;
        const JWTCookie = jwt.encode(cookie, secret!);
        res.cookie("friendID", JWTCookie);
        res.send({ success: true, friendDB });
    } catch (error: any) {
        res.status(500).send({ success: false, error: error.message });
    }
}

// export async function GetUserById(req: express.Request, res: express.Response) {
//     try {
//         const { userId } = req.params;
//         const userDB = await UserModel.findById(userId);
//         if (!userDB) throw new Error("userDB return undefiend in getUserById AT (usersCtrl)");
//         res.send({ userFound: true, userDB });
//     } catch (error: any) {
//         res.status(500).send({ userFound: false, error: error.message });
//     }
// }

export async function DeleteFriendFromCookie(req: express.Request, res: express.Response) {
    try {
        res.clearCookie("friendID");
        res.send({ deleted: true });
    } catch (error: any) {
        res.status(500).send({ deleted: false, error: error.message });
    }
}

export async function AddFriend(req: express.Request, res: express.Response) {
    try {
        const { friendID, userID } = req.cookies;
        const secret = process.env.JWT_SECRET;
        const decodedFriendId = jwt.decode(friendID, secret!);
        const decodedUserId = jwt.decode(userID, secret!);
        const { friendId } = decodedFriendId;
        const { userId } = decodedUserId;
        let areFriends = "u Allready friends dude";
        const friendDB = await UserModel.findOne({ friendsID: friendId });
        if (!friendDB) {
            await UserModel.findByIdAndUpdate(userId, { $push: { friendsID: friendId } });
            await UserModel.findByIdAndUpdate(friendId, { $push: { friendsID: userId } });
            areFriends = "u become friends now :)";
        }
        res.send({ success: true, areFriends });
    } catch (error: any) {
        res.status(500).send({ success: false, error: error.message });
    }
}

export async function RemoveFriend(req: express.Request, res: express.Response) {
    try {
        const { friendID, userID } = req.cookies;
        const secret = process.env.JWT_SECRET;
        const decodedFriendId = jwt.decode(friendID, secret!);
        const decodedUserId = jwt.decode(userID, secret!);
        const { friendId } = decodedFriendId;
        const { userId } = decodedUserId;

        const friendDB = await UserModel.findOne({ friendsID: friendId });
        if (friendDB) {
            await UserModel.updateOne({ _id: userId }, { $pull: { friendsID: friendId } });
            await UserModel.updateOne({ _id: friendId }, { $pull: { friendsID: userId } });
        }
        res.send({ success: true, msg: "user deleted succesfully" });
    } catch (error: any) {
        res.status(500).send({ success: false, error: error.message });
    }
}

export async function CheckIfAreFriends(req: express.Request, res: express.Response) {
    try {
        const { friendID, userID } = req.cookies;
        const secret = process.env.JWT_SECRET;
        const decodedFriendId = jwt.decode(friendID, secret!);
        const decodedUserId = jwt.decode(userID, secret!);
        const { friendId } = decodedFriendId;
        const { userId } = decodedUserId;
        let areFriends = false;
        const userDB = await UserModel.findOne({ _id: userId, friendsID: friendId });
        if (!userDB) areFriends = false;
        else areFriends = true;

        res.send({ success: true, areFriends });
    } catch (error: any) {
        res.status(500).send({ success: false, error: error.message });
    }
}

export async function GetFriendInfo(req: express.Request, res: express.Response) {
    try {
        const { friendID } = req.cookies;
        const secret = process.env.JWT_SECRET;
        const decodedFriendId = jwt.decode(friendID, secret!);
        const {friendId} = decodedFriendId;

        const friendDB = await UserModel.findOne({ _id: friendId });
        // const imageSrc = friendDB?.imageSrc;
        res.send({ friendInfoFound: true, friendDB });
    } catch (error: any) {
        res.status(500).send({ friendInfoFound: false, error: error.message });
    }
}

export async function search(req: express.Request, res: express.Response) {
    try {
        const { userID } = req.cookies;
        const secret = process.env.JWT_SECRET;
        const decodedUserId = jwt.decode(userID, secret!);
        const {userId} = decodedUserId;

        const {inputFromUser} = req.body;
        const pattern = new RegExp(`^${inputFromUser}`);
        const friendsDB = await UserModel.find({ email: {$regex : pattern} });
        
        res.send({ friendFound: true, friendsDB, userId });
    } catch (error: any) {
        res.status(500).send({ friendFound: false, error: error.message });
    }
}
