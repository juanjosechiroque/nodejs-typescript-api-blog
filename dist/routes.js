"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_routes_1 = __importDefault(require("./posts/posts.routes"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.json({ message: "API is running" });
});
router.use("/posts", posts_routes_1.default);
exports.default = router;
