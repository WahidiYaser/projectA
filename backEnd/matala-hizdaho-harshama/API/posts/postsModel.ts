import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId: String,
    userEmail: String,
    postText: String,
    postImg: String
});

const PostModel = mongoose.model("posts", postSchema);

export default PostModel;