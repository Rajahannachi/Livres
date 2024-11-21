import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import routerAuth from "./routes/auth.js";
import routerAuthor from "./routes/author.js";
import routerCategory from "./routes/category.js";
import routerLivres from "./routes/Livres.js";

import eventRoutes from "./routes/eventRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/livres", routerLivres);
app.use("/api/author", routerAuthor);
app.use("/api/auth", routerAuth);
app.use("/api/categories", routerCategory);
app.use("/api", eventRoutes); 

const DB_URI =
  "mongodb+srv://rajahannachi21:raja123@cluster0.aitqm.mongodb.net/DB_Livres";

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connexion réussie à la base de données !");
  })
  .catch((error) => {
    console.error("Échec de la connexion à la base de données :", error);
  });

export default app;
