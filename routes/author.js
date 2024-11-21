import { createAuthor } from "../controllers/author.js";
import express from "express";
const router = express.Router();

//routes
router.post("/add", createAuthor);

export default router;
