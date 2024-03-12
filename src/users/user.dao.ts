import User from "./user.model";

export const createUserDao = async (email: string) => {
    const result = await User.create({ email });
    return result;
}

export const loginDao = async (email: string) => {
    const result = await User.findOne({ where: { email } });
    return result;
}
