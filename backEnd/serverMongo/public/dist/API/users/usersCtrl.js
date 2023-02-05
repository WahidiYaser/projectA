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
exports.updatePassowrdById = exports.login = exports.register = exports.getAllUsers = void 0;
const usersModel_1 = __importDefault(require("./usersModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// const saltRounds = 10;
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usersDB = yield usersModel_1.default.find();
            if (!usersDB)
                throw new Error("no data was found");
            res.send({ success: true, usersDB });
        }
        catch (error) {
            res.status(500).send({ success: false, error });
        }
    });
}
exports.getAllUsers = getAllUsers;
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
            res.send({ ok: true, msg: `welcome back ${email}` });
        }
        catch (error) {
            res.status(500).send({ ok: false, error: error.message });
        }
    });
}
exports.login = login;
function updatePassowrdById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userDB = yield usersModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.send({ ok: true, userDB });
        }
        catch (error) {
            res.status(500).send({ ok: false, error: error.message });
        }
    });
}
exports.updatePassowrdById = updatePassowrdById;
