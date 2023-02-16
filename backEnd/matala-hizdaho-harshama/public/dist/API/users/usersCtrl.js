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
exports.search = exports.GetFriendInfo = exports.CheckIfAreFriends = exports.RemoveFriend = exports.AddFriend = exports.DeleteFriendFromCookie = exports.GetUserByEmail = exports.getAllUsers = exports.deleteUserByCookie = exports.updateImageSrc = exports.updateUserPassword = exports.logOut = exports.login = exports.register = exports.CheckIfUserConnected = void 0;
const usersModel_1 = __importStar(require("./usersModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
function CheckIfUserConnected(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userID } = req.cookies;
            if (!userID) {
                res.send({ success: true, msg: "no user in cookies" });
            }
            else {
                const secret = process.env.JWT_SECRET;
                const decodedUserId = jwt_simple_1.default.decode(userID, secret);
                const { userId } = decodedUserId;
                const userDB = yield usersModel_1.default.findById(userId);
                if (!userDB)
                    throw new Error(`no user in data base with that id ${userId}`);
                res.send({ success: true, userDB });
            }
        }
        catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    });
}
exports.CheckIfUserConnected = CheckIfUserConnected;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password, repPassword, imageSrc } = req.body;
            if (!email || !password || !repPassword)
                throw new Error("couldn't get all fields from client");
            // const userDB = UserModel.create({email, password});    this another way to create new data/user
            // const salt = bcrypt.genSaltSync(saltRounds);
            // const hash = bcrypt.hashSync(password, salt);
            const { error } = usersModel_1.UserValidation.validate({ email, password, repeatPassword: repPassword });
            if (error)
                throw new Error("problem with validation at register CTRL");
            const hash = bcrypt_1.default.hashSync(password, 10);
            const userDB = new usersModel_1.default({ email, password: hash, imageSrc });
            yield userDB.save();
            if (!userDB)
                throw new Error("no user was created");
            const cookie = { userId: userDB._id };
            const secret = process.env.JWT_SECRET;
            const JWTCookie = jwt_simple_1.default.encode(cookie, secret);
            res.cookie("userID", JWTCookie);
            res.send({ registered: true, msg: "new user was created" });
        }
        catch (error) {
            res.status(500).send({ registered: false, error: error.message });
        }
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const userDB = yield usersModel_1.default.findOne({ email });
            if (!userDB)
                throw new Error("email doesn't exist");
            const isMatch = yield bcrypt_1.default.compare(password, userDB.password);
            if (!isMatch)
                throw new Error("passord is INCORRECT");
            const cookie = { userId: userDB._id };
            const secret = process.env.JWT_SECRET;
            const JWTCookie = jwt_simple_1.default.encode(cookie, secret);
            res.cookie("userID", JWTCookie);
            res.send({ logging: true, msg: `welcome ${email}` });
        }
        catch (error) {
            res.status(500).send({ logging: false, error: error.message });
        }
    });
}
exports.login = login;
function logOut(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.clearCookie("userID");
            res.send({ loggedout: true });
        }
        catch (error) {
            res.status(500).send({ loggedout: false, error: error.message });
        }
    });
}
exports.logOut = logOut;
function updateUserPassword(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userID } = req.cookies;
            if (!userID)
                throw new Error("no user is login in the cookies");
            const { userId } = userID;
            console.log(req.body);
            const { password } = req.body;
            const hash = bcrypt_1.default.hashSync(password, 10);
            const userDB = yield usersModel_1.default.findByIdAndUpdate(userId, { password: hash }, { new: true });
            if (!userDB)
                throw new Error(`no user in data base with that id: ${userId}`);
            res.send({ ok: true, userDB });
        }
        catch (error) {
            res.status(500).send({ ok: false, error: error.message });
        }
    });
}
exports.updateUserPassword = updateUserPassword;
function updateImageSrc(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const { userId } = decodedUserId;
            console.log(req.body);
            const { imageSrc } = req.body;
            const userDB = yield usersModel_1.default.findByIdAndUpdate(userId, imageSrc);
            if (!userDB)
                throw new Error(`usersCTRL, updateImageSrc, (if!userDB)`);
            res.send({ ok: true, userDB });
        }
        catch (error) {
            res.status(500).send({ ok: false, error: error.message });
        }
    });
}
exports.updateImageSrc = updateImageSrc;
function deleteUserByCookie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userID } = req.cookies;
            if (!userID)
                throw new Error("userID not Found");
            const { userId } = userID;
            const userDB = yield usersModel_1.default.findByIdAndDelete(userId);
            if (!userDB)
                throw new Error("no userDB created at deleteUserByCookie at usersCtrl");
            res.send({ ok: true, userDB });
        }
        catch (error) {
            res.status(500).send({ ok: false, error });
        }
    });
}
exports.deleteUserByCookie = deleteUserByCookie;
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userID } = req.cookies;
            if (!userID)
                throw new Error("no userID in the cookies at getAllUsers (ctrl)");
            const secret = process.env.JWT_SECRET;
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const { userId } = decodedUserId;
            const myUser = yield usersModel_1.default.findById(userId);
            const usersDB = yield usersModel_1.default.find();
            if (!usersDB || !myUser)
                throw new Error("myUser || usersDB is come back empty");
            res.send({ success: true, usersDB, myUser });
        }
        catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    });
}
exports.getAllUsers = getAllUsers;
function GetUserByEmail(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { friendEmail } = req.params;
            const friendDB = yield usersModel_1.default.findOne({ email: friendEmail });
            if (!friendDB)
                throw new Error("friendDB is empty at getUserByEmail AT (ctrl)");
            const cookie = { friendId: friendDB._id };
            const secret = process.env.JWT_SECRET;
            const JWTCookie = jwt_simple_1.default.encode(cookie, secret);
            res.cookie("friendID", JWTCookie);
            res.send({ success: true, friendDB });
        }
        catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    });
}
exports.GetUserByEmail = GetUserByEmail;
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
function DeleteFriendFromCookie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            res.clearCookie("friendID");
            res.send({ deleted: true });
        }
        catch (error) {
            res.status(500).send({ deleted: false, error: error.message });
        }
    });
}
exports.DeleteFriendFromCookie = DeleteFriendFromCookie;
function AddFriend(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { friendID, userID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedFriendId = jwt_simple_1.default.decode(friendID, secret);
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const { friendId } = decodedFriendId;
            const { userId } = decodedUserId;
            let areFriends = "u Allready friends dude";
            const friendDB = yield usersModel_1.default.findOne({ friendsID: friendId });
            if (!friendDB) {
                yield usersModel_1.default.findByIdAndUpdate(userId, { $push: { friendsID: friendId } });
                yield usersModel_1.default.findByIdAndUpdate(friendId, { $push: { friendsID: userId } });
                areFriends = "u become friends now :)";
            }
            res.send({ success: true, areFriends });
        }
        catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    });
}
exports.AddFriend = AddFriend;
function RemoveFriend(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { friendID, userID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedFriendId = jwt_simple_1.default.decode(friendID, secret);
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const { friendId } = decodedFriendId;
            const { userId } = decodedUserId;
            const friendDB = yield usersModel_1.default.findOne({ friendsID: friendId });
            if (friendDB) {
                yield usersModel_1.default.updateOne({ _id: userId }, { $pull: { friendsID: friendId } });
                yield usersModel_1.default.updateOne({ _id: friendId }, { $pull: { friendsID: userId } });
            }
            res.send({ success: true, msg: "user deleted succesfully" });
        }
        catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    });
}
exports.RemoveFriend = RemoveFriend;
function CheckIfAreFriends(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { friendID, userID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedFriendId = jwt_simple_1.default.decode(friendID, secret);
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const { friendId } = decodedFriendId;
            const { userId } = decodedUserId;
            let areFriends = false;
            const userDB = yield usersModel_1.default.findOne({ _id: userId, friendsID: friendId });
            if (!userDB)
                areFriends = false;
            else
                areFriends = true;
            res.send({ success: true, areFriends });
        }
        catch (error) {
            res.status(500).send({ success: false, error: error.message });
        }
    });
}
exports.CheckIfAreFriends = CheckIfAreFriends;
function GetFriendInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { friendID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedFriendId = jwt_simple_1.default.decode(friendID, secret);
            const { friendId } = decodedFriendId;
            const friendDB = yield usersModel_1.default.findOne({ _id: friendId });
            // const imageSrc = friendDB?.imageSrc;
            res.send({ friendInfoFound: true, friendDB });
        }
        catch (error) {
            res.status(500).send({ friendInfoFound: false, error: error.message });
        }
    });
}
exports.GetFriendInfo = GetFriendInfo;
function search(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const { userId } = decodedUserId;
            const { inputFromUser } = req.body;
            const pattern = new RegExp(`^${inputFromUser}`);
            const friendsDB = yield usersModel_1.default.find({ email: { $regex: pattern } });
            res.send({ friendFound: true, friendsDB, userId });
        }
        catch (error) {
            res.status(500).send({ friendFound: false, error: error.message });
        }
    });
}
exports.search = search;
