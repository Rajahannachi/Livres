import User from "../models/auth.js";
import bcrypt from "bcrypt";

export const signUp = async (req, res) => {
  try {
    const hashedPWD = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      mail: req.body.mail,
      password: hashedPWD,
    });
    await user.save();
    //delete user.password;
    //... khoudh les champ elii bqaw f user b khlef password elli nheb nahhih f instanciation
    const { password, ...newUser } = user.toObject();
    res.status(200).json({ model: newUser, message: "success" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const login = async (req, res) => {};
