"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPosts = void 0;
const getPosts = (req, res) => {
    res.json({ message: "get posts" });
};
exports.getPosts = getPosts;
const createPost = (req, res) => {
    res.status(201).json({ message: "post created" });
};
exports.createPost = createPost;
