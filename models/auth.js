import mongoose from "mongoose";
const AuthSchema = new mongoose.Schema({
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
});
export default mongoose.model("auth", AuthSchema);
