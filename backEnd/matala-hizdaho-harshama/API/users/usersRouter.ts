import express from "express";
import { register, login, CheckIfUserConnected,
     updateUserPassword, deleteUserByCookie,
      logOut, getAllUsers, GetUserByEmail } from "./usersCtrl";

const router = express.Router();

router
.get("/get-user-by-cookie", CheckIfUserConnected)
.get("/logout", logOut)
.get("/get-all-users", getAllUsers)
.get("/get-user-by-email/:friendEmail", GetUserByEmail)
.post("/login", login)
.post("/register", register)
.put("/update", updateUserPassword)
.delete("/delete", deleteUserByCookie);

export default router;