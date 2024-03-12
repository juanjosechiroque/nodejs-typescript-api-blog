import { Request, Response } from "express"
import { createUser, login } from "./user.service";

export const signupHandle = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
        const token = await createUser(email);
        res.status(200).json({ token });
    } catch (error) {
        res.json(error);
    }
}

export const loginHandle = async (req: Request, res: Response) => {
    const { email } = req.body;
    const token = await login(email);
    res.status(200).json({ token });
}

