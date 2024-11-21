import Category from "../models/category.js";

export const addCategory = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Le titre est requis." });
    }

    const category = new Category({ title });
    await category.save();

    res
      .status(201)
      .json({ model: category, message: "Catégorie créée avec succès !" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
