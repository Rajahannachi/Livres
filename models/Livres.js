import mongoose from "mongoose";

const LivresSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Le titre est obligatoire"], // Ajout d'un message d'erreur
  },
  author: {
    type: String,
    required: false, // Champ non utilisé pour la validation
  },
  price: {
    type: Number,
    required: [true, "Le prix est obligatoire"], // Ajout d'un message d'erreur
  },
  ecrivaint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: [true, "L'auteur est obligatoire"],
    validate: {
      validator: async function (authorId) {
        // Validation personnalisée pour vérifier si l'auteur a d'autres livres
        const Livre = mongoose.model("Livres"); // Référence au modèle actuel
        const existingBooks = await Livre.find({ ecrivaint: authorId });
        return existingBooks.length > 0; // Renvoie vrai si l'auteur a d'autres livres
      },
      message: "L'auteur doit avoir écrit au moins un autre livre avant.", // Message d'erreur
    },
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

export default mongoose.model("Livres", LivresSchema);

