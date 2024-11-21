import {
  fetchLivres,
  fetchLivre,
  createLivre,
  updateLivre,
  deleteLivre,
} from "../controllers/Livres.js";
import express from "express";
const router = express.Router();

//routes
router.get("/", fetchLivres);

router.get("/:id", fetchLivre);
router.post("/", createLivre);

router.patch("/:id", updateLivre);
router.delete("/:id", deleteLivre);
export default router;
