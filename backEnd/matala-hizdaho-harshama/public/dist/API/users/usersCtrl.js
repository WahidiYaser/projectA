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
exports.logOut = exports.deleteUserByCookie = exports.updateUserPassword = exports.login = exports.register = exports.CheckIfUserConnected = void 0;
const usersModel_1 = __importStar(require("./usersModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
function CheckIfUserConnected(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userID } = req.cookies;
            if (!userID)
                throw new Error("no user found in cookies");
            const secret = process.env.JWT_SECRET;
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const { userId } = decodedUserId;
            console.log(userId);
            const userDB = yield usersModel_1.default.findById(userId);
            if (!userDB)
                throw new Error(`no user in data base with that id ${userId}`);
            res.send({ success: true, userDB });
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
            const { email, password, repPassword } = req.body;
            if (!email || !password || !repPassword)
                throw new Error("couldn't get all fields from client");
            // const userDB = UserModel.create({email, password});    this another way to create new data/user
            // const salt = bcrypt.genSaltSync(saltRounds);
            // const hash = bcrypt.hashSync(password, salt);
            console.log(email, password, repPassword);
            const { error } = usersModel_1.UserValidation.validate({ email, password, repeatPassword: repPassword });
            if (error)
                throw new Error("problem with validation");
            const hash = bcrypt_1.default.hashSync(password, 10);
            const userDB = new usersModel_1.default({ email, password: hash });
            yield userDB.save();
            if (!userDB)
                throw new Error("no user was created");
            const cookie = { userId: userDB._id };
            const secret = process.env.JWT_SECRET;
            const JWTCookie = jwt_simple_1.default.encode(cookie, secret);
            res.cookie("userID", JWTCookie);
            res.send({ ok: true, msg: "new user was created" });
        }
        catch (error) {
            res.status(500).send({ success: false, error: error.message });
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
