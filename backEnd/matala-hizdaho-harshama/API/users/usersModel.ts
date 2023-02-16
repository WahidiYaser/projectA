import mongoose from "mongoose";
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
const joiPassword = Joi.extend(joiPasswordExtendCore);

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: String,
    imageSrc: {
        type: String
    },
    chatsID: {
        type: String
    },  
    friendsID: {
        type: String
    }
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;

export const UserValidation = Joi.object({
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net', 'il']}}).required(),
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
    repeatPassword: Joi.ref("password")
});