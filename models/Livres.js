import mongoose from "mongoose";

const LivresSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  ecrivaint: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});
export default mongoose.model("Livres", LivresSchema);
