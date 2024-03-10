import { Request, Response } from "express";
import Post from "./posts.model";

export const getPosts = async (req: Request, res: Response) => {
    const lsPosts = await Post.findAll();
    res.json({ data: lsPosts });
}

export const createPost = async (req: Request, res: Response) => {
    try {
        const post = await Post.create({
            title: "nodejs course",
            content: "the course about nodejs"
        });
        res.status(201).json({ data: post });
    } catch (error) {
        res.json(error);
    }
}
