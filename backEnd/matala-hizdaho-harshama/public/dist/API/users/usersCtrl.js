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
exports.deleteUserByCookie = exports.updateUserPassword = exports.login = exports.register = exports.getUserByCookie = void 0;
const usersModel_1 = __importDefault(require("./usersModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
function getUserByCookie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userID } = req.cookies;
            if (!userID)
                throw new Error("no user found in cookies");
            const { userId } = userID;
            const userDB = yield usersModel_1.default.findById(userId);
            if (!userDB)
                throw new Error(`no user in data base with that id ${userId}`);
            res.send({ success: true, userDB });
        }
        catch (error) {
            res.status(500).send({ success: false, error });
        }
    });
}
exports.getUserByCookie = getUserByCookie;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            // const userDB = UserModel.create({email, password});    this another way to create new data/user
            // const salt = bcrypt.genSaltSync(saltRounds);
            // const hash = bcrypt.hashSync(password, salt);
            const hash2 = bcrypt_1.default.hashSync(password, 10);
            const userDB = new usersModel_1.default({ email, password: hash2 });
            yield userDB.save();
            if (!userDB)
                throw new Error("no user was created");
            const cookie = { userId: userDB._id };
            res.cookie("userID", cookie);
            res.send({ ok: true, msg: "new user was created" });
        }
        catch (error) {
            res.status(500).send({ success: false, error });
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
            res.cookie("userID", cookie);
            res.send({ ok: true, msg: `welcome back ${email}` });
        }
        catch (error) {
            res.status(500).send({ ok: false, error: error.message });
        }
    });
}
exports.login = login;
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
