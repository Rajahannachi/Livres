import Joi from "joi";

// Schéma de validation de l'inscription
const signupSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required().messages({
    "string.base": "Le prénom doit être une chaîne de caractères.",
    "string.min": "Le prénom doit comporter au moins 2 caractères.",
    "string.max": "Le prénom ne peut pas dépasser 50 caractères.",
    "any.required": "Le prénom est requis.",
  }),
  lastName: Joi.string().min(2).max(50).optional().messages({
    "string.base": "Le nom doit être une chaîne de caractères.",
    "string.min": "Le nom doit comporter au moins 2 caractères.",
    "string.max": "Le nom ne peut pas dépasser 50 caractères.",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "L'email doit être une chaîne de caractères.",
    "string.email": "L'email doit être valide.",
    "any.required": "L'email est requis.",
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": "Le mot de passe doit être une chaîne de caractères.",
    "string.min": "Le mot de passe doit comporter au moins 6 caractères.",
    "any.required": "Le mot de passe est requis.",
  }),
});

// Middleware de validation
const validateSignup = (req, res, next) => {
  const { error } = signupSchema.validate(req.body, { abortEarly: false });

  if (error) {
    // Extraire les messages d'erreur
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({
      error: errorMessages,
      message: "Les données soumises sont invalides.",
    });
  }

  next(); // Si la validation passe, on passe au contrôleur suivant
};

export default validateSignup;