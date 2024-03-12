import jwt from "jsonwebtoken";
import { createUserDao, loginDao } from "./user.dao";

export const createUser = async (email: string) => {
    const result = await createUserDao(email);
    const token = jwt.sign({ email }, "MSECRETKEY");
    return token;
}

export const login = async (email: string) => {
    const userStored = await loginDao(email);
    if (!userStored) return null;
    const token = jwt.sign({ email }, "MSECRETKEY");
    return token;
}