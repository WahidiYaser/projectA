"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const joi_password_1 = require("joi-password");
const joiPassword = joi_1.default.extend(joi_password_1.joiPasswordExtendCore);
const UserSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    chatsID: {
        type: (Array),
        unique: true,
        required: false
    },
    friendsID: {
        type: (Array),
        unique: true,
        required: false
    }
});
const UserModel = mongoose_1.default.model("users", UserSchema);
exports.default = UserModel;
exports.UserValidation = joi_1.default.object({
    email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'il'] } }).required(),
    password: joiPassword
        .string()
        .min(3)
        .max(16)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required(),
    repeatPassword: joi_1.default.ref("password")
});
