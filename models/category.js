import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ["Horror", "Mystery", "Romance", "Science Fiction", "Fantasy"],
    required: true,
  },
});

export default mongoose.model("Category", CategorySchema);
