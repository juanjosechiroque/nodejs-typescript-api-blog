import { Router } from "express";
import { loginHandle, signupHandle } from "./user.controller";

const router = Router();

router.post("/signup", signupHandle);
router.post("/login", loginHandle);

export default router;