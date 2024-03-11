import Post from "./post.model";

export const createPostDao = async (title: string, content: string) => {
    const result = await Post.create({ title, content });
    return result;
}

export const getPostsDao = async () => {
    const result = await Post.findAll();
    return result;
}