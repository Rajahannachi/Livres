import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  nationnality: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Author", AuthorSchema);
