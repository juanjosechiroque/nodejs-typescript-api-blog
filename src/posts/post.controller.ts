import { Request, Response } from "express";
import { createPost, getPosts } from "./post.service";

export const getPostsHandle = async (req: Request, res: Response) => {
    const lsPosts = await getPosts();
    res.json({ data: lsPosts });
}

export const createPostHandle = async (req: Request, res: Response) => {
    try {
        const post = await createPost("nodejs course", "the course about nodejs");
        res.status(201).json({ data: post });
    } catch (error) {
        res.json(error);
    }
}
