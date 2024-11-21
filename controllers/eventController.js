// controllers/eventController.js
import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res
      .status(201)
      .json({ model: event, message: "Événement créé avec succès." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ model: events, message: "Liste des événements." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};