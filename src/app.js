// Importation des bibliothèques
const express = require("express");
const cors = require("cors");
const limit = require("express-rate-limit");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

// Importation de la connexion à la base de données et de middleware d'erreur global
const connection = require("../config/db");
const errorHandler = require("../middlewares/errorHandler");

// Importation des routes
const router = require("../routes/userRoutes/userRoutes");
const taskRouter = require("../routes/taskRoutes/taskRoutes");

// Création de l'application express
const app = express();

// Middlewares globaux
app.use(express.json());
app.use(cors());
app.use("/api/users", router);
app.use("/api/tasks", taskRouter);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Middleware d'erreur global
app.use("/api", errorHandler);

// Exportaion de l'application pour le serveur
module.exports = app;