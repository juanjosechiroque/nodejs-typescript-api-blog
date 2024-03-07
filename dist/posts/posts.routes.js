"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_controller_1 = require("./posts.controller");
const router = (0, express_1.Router)();
router.get("/", posts_controller_1.getPosts);
router.post("/", posts_controller_1.createPost);
exports.default = router;
