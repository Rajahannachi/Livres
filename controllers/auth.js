import bcrypt from "bcrypt";
import User from "../models/auth.js";

export const signUp = async (req, res) => {
  try {
    const hashedPWD = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      mail: req.body.mail,
      password: hashedPWD,
    });
    await user.save();
    const { password, ...newUser } = user.toObject();
    res.status(200).json({ model: newUser, message: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const login = async (req, res) => {};
