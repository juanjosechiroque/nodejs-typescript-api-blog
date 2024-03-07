import { Request, Response } from "express";

export const getPosts = (req: Request, res: Response) => {
    res.json({ message: "get posts" });
}

export const createPost = (req: Request, res: Response) => {
    res.status(201).json({ message: "post created" });
}
