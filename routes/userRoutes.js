import express from 'express';
import { signupUser } from '../controllers/userController.js'; // Importer votre contrôleur pour gérer l'inscription
import validateSignup from '../middlewares/validation.js'; // Importer le middleware de validation

const router = express.Router();

// Route pour l'inscription avec validation des données
router.post('/signup', validateSignup, signupUser);

export default router;