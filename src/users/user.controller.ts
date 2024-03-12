import { Request, Response } from "express"
import jwt from "jsonwebtoken";

export const signupHandle = () => {

}

export const loginHandle = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = jwt.sign({ email }, "MSECRETKEY");
    res.status(201).json({ token });
}

