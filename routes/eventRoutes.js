// routes/eventRoutes.js
import express from "express";
import { createEvent, fetchEvents } from "../controllers/eventController.js";
import validateEvent from "../Middelware/validateEvent.js";


const router = express.Router();

router.post("/events", validateEvent, createEvent); 
router.get("/events", fetchEvents); 
export default router;