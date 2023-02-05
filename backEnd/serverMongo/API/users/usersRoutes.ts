import express from "express";
import { getAllUsers, register, login, updatePassowrdById, deleteUserById } from "./usersCtrl";

const router = express.Router();

router
.get("", getAllUsers)
.post("/login", login)
.post("/register", register)
.patch("/:id", updatePassowrdById)
.patch("/delete/:id", deleteUserById);

export default router;