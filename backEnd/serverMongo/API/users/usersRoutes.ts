import express from "express";
import { getAllUsers, register, login, updatePassowrdById } from "./usersCtrl";

const router = express.Router();

router
.get("", getAllUsers)
.post("/login", login)
.post("/register", register)
.patch("/:id", updatePassowrdById);


export default router;