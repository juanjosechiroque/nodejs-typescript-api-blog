import { createPostDao, getPostsDao } from "./post.dao";

export const createPost = async (title: string, content: string) => {
    const result = await createPostDao(title, content);
    return result;
}

export const getPosts = async () => {
    const result = await getPostsDao();
    return result;
}

