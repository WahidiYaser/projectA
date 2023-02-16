import express from "express";
import { register, login, CheckIfUserConnected,
     updateUserPassword, deleteUserByCookie,
      logOut, getAllUsers, GetUserByEmail, DeleteFriendFromCookie,
       AddFriend, RemoveFriend, CheckIfAreFriends,
       GetFriendInfo, updateImageSrc, search} from "./usersCtrl";

const router = express.Router();

router
.get("/get-user-by-cookie", CheckIfUserConnected)
.get("/logout", logOut)
.get("/get-all-users", getAllUsers)
.get("/get-user-by-email/:friendEmail", GetUserByEmail)
// .get("/get-user-by-id/:userId", GetUserById)
.get("/delete-user-from-cookies", DeleteFriendFromCookie)
.get("/add-friend", AddFriend)
.get("/remove-friend", RemoveFriend)
.get("/check-if-friends", CheckIfAreFriends)
.get("/get-friend-info", GetFriendInfo)
.post("/login", login)
.post("/register", register)
.post("/search", search)
.put("/update-password", updateUserPassword)
.put("/update-photo", updateImageSrc)
.delete("/delete", deleteUserByCookie);

export default router;