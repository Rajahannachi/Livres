import { exec } from "child_process";
import Livres from "../models/Livres.js";
// Fetch all books
export const fetchLivres = async (req, res) => {
  try {
    const livres = await Livres.find();
    res.status(200).json({ model: livres, message: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const fetchLivre = async (req, res) => {
  try {
    const livre = await Livres.findOne({ _id: req.params.id })
      .populate("ecrivaint") // Utilise le champ 'ecrivaint' pour référencer les données de 'author'
      .populate("categories")
      .exec();

    if (!livre) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }

    res.status(200).json({ model: livre, message: "Livre trouvé avec succès" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createLivre = async (req, res) => {
  try {
    console.log("body:", req.body);
    const livre = new Livres(req.body);
    await livre.save();
    res.status(201).json({ model: livre, message: "success" });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "donnés invalides",
    });
  }
};
export const updateLivre = async (req, res) => {
  try {
    console.log("id:", req.params.id);
    console.log("body:", req.body);
    const livre = await Livres.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!livre) {
      res.status(404).json({ model: livre, message: "objet non trouvé" });
    } else {
      res.status(200).json({ model: livre, message: "objet trouvé" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const deleteLivre = async (req, res) => {
  try {
    console.log("id:", req.params.id);
    const livre = await Livres.deleteOne({ _id: req.params.id });
    console.log(livre);
    if (!livre.deletedCount) {
      res.status(404).json({ model: livre, message: "objet non trouvé" });
    } else {
      res.status(200).json({ model: livre, message: "objet trouvé" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
