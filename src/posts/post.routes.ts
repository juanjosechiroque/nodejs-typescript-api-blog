import { Router } from "express";
import { createPostHandle, getPostsHandle } from "./post.controller";

const router = Router();

router.get("/", getPostsHandle);
router.post("/", createPostHandle);

export default router;