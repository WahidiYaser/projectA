import express from "express";
import { addPost, getAllPosts, DeleteAllPosts } from "./postsCtrl";

const router = express.Router();

router
.get("/get-all-posts", getAllPosts)
.get("/delete-all-posts", DeleteAllPosts)
.post("/add-post", addPost);

export default router;