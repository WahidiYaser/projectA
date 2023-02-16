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
exports.DeleteAllPosts = exports.getAllPosts = exports.addPost = void 0;
const postsModel_1 = __importDefault(require("./postsModel"));
const usersModel_1 = __importDefault(require("../users/usersModel"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
function addPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userID } = req.cookies;
            const secret = process.env.JWT_SECRET;
            const decodedUserId = jwt_simple_1.default.decode(userID, secret);
            const { userId } = decodedUserId;
            const { imgToPost, textToPost } = req.body;
            const userDB = yield usersModel_1.default.findById(userId);
            const postDB = new postsModel_1.default({ userId, userEmail: userDB.email, postText: textToPost, postImg: imgToPost });
            yield postDB.save();
            res.send({ postSaved: true, postDB });
        }
        catch (error) {
            res.status(500).send({ postSaved: false, error: error.message });
        }
    });
}
exports.addPost = addPost;
function getAllPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const postsDB = yield postsModel_1.default.find();
            if (!postsDB)
                throw new Error("no body published a post yet in th website, getAllPosts, postsCtrl");
            res.send({ postSaved: true, postsDB });
        }
        catch (error) {
            res.status(500).send({ postSaved: false, error: error.message });
        }
    });
}
exports.getAllPosts = getAllPosts;
function DeleteAllPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const postsDB = yield postsModel_1.default.find();
            if (postsDB) {
                postsDB.forEach((postDB) => __awaiter(this, void 0, void 0, function* () {
                    yield postsModel_1.default.findByIdAndRemove(postDB._id);
                }));
            }
            else
                throw new Error("no posts found in the website, DeleteAllPosts, postsCtrl");
            res.send({ postsDeleted: true, postsDB });
        }
        catch (error) {
            res.status(500).send({ postSaved: false, error: error.message });
        }
    });
}
exports.DeleteAllPosts = DeleteAllPosts;
