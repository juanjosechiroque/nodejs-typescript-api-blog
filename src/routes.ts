import { Router } from "express";
import postRoutes from "./posts/post.routes";
import userRoutes from "./users/user.routes";

const router = Router();

router.get('/', (req, res) => {
    return res.json({ message: "API is running" });
});

router.use("/posts", postRoutes);
router.use("/users", userRoutes);

export default router;