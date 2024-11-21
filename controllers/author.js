import Author from "../models/author.js";
export const fetchAuthors = async (req, res) => {};
export const fetchAuthor = async (req, res) => {};
export const createAuthor = async (req, res) => {
  try {
    console.log("body:", req.body);
    const author = new Author(req.body);
    await author.save();
    res.status(201).json({ model: author, message: "success" });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "donnés invalides",
    });
  }
};

export const updateAuthor = async (req, res) => {};
export const deleteAuthor = async (req, res) => {};
