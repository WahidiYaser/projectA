import express from "express";
import { register, login, CheckIfUserConnected, updateUserPassword, deleteUserByCookie, logOut } from "./usersCtrl";

const router = express.Router();

router
.get("/get-user-by-cookie", CheckIfUserConnected)
.get("/logout", logOut)
.post("/login", login)
.post("/register", register)
.put("/update", updateUserPassword)
.delete("/delete", deleteUserByCookie);

export default router;