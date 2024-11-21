import { signUp, login } from "../controllers/auth.js";

import express from "express";
const router = express.Router();

router.post("/signUp", signUp);

router.post("/login", login);
export default router;
