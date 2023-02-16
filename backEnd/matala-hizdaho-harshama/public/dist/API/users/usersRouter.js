"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersCtrl_1 = require("./usersCtrl");
const router = express_1.default.Router();
router
    .get("/get-user-by-cookie", usersCtrl_1.CheckIfUserConnected)
    .get("/logout", usersCtrl_1.logOut)
    .get("/get-all-users", usersCtrl_1.getAllUsers)
    .get("/get-user-by-email/:friendEmail", usersCtrl_1.GetUserByEmail)
    // .get("/get-user-by-id/:userId", GetUserById)
    .get("/delete-user-from-cookies", usersCtrl_1.DeleteFriendFromCookie)
    .get("/add-friend", usersCtrl_1.AddFriend)
    .get("/remove-friend", usersCtrl_1.RemoveFriend)
    .get("/check-if-friends", usersCtrl_1.CheckIfAreFriends)
    .get("/get-friend-info", usersCtrl_1.GetFriendInfo)
    .post("/login", usersCtrl_1.login)
    .post("/register", usersCtrl_1.register)
    .post("/search", usersCtrl_1.search)
    .put("/update-password", usersCtrl_1.updateUserPassword)
    .put("/update-photo", usersCtrl_1.updateImageSrc)
    .delete("/delete", usersCtrl_1.deleteUserByCookie);
exports.default = router;
