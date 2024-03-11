import { Router } from "express";
import postRoutes from "./posts/post.routes";

const router = Router();

router.get('/', (req, res) => {
    return res.json({ message: "API is running" });
});

router.use("/posts", postRoutes);

export default router;