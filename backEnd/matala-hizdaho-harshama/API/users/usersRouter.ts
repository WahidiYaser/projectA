import express from "express";
import { register, login, getUserByCookie, updateUserPassword, deleteUserByCookie } from "./usersCtrl";

const router = express.Router();

router
.get("/get-user-by-cookie", getUserByCookie)
.post("/login", login)
.post("/register", register)
.put("/update", updateUserPassword)
.delete("/delete", deleteUserByCookie);

export default router;