import User from '../models/User.js';

export const signupUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Vérification si l'email existe déjà dans la base de données
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: 'Cet email est déjà associé à un compte.',
      });
    }

    // Création d'un nouvel utilisateur
    const newUser = new User({
      firstName,
      lastName,
      email,
      password, // N'oubliez pas de hacher le mot de passe avant de l'enregistrer
    });

    await newUser.save();
    res.status(201).json({ message: 'Utilisateur créé avec succès.' });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};