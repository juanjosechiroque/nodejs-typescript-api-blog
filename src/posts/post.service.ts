import Post from "./post.model";

export const createPost = async (title: string, content: string) => {
    const result = await Post.create({
        title: "nodejs course",
        content: "the course about nodejs"
    });
    return result;
}

export const getPosts = async () => {
    const result = await Post.findAll();
    return result;
}

