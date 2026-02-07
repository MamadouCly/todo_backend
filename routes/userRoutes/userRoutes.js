const express = require("express");

// Importation des règles de validation des données
const registerValidator = require("../../validators/users/register/registerValidator");
const loginValidator = require("../../validators/users/login/loginValidator");
const validate = require("../../validators/validate/validate");

// Importation de "multer validator" et "middleware d'authentification"
const upload = require("../../middlewares/upload");
const auth = require("../../middlewares/auth");

// Importation des fonction de contrôleur via la destructuration
const {register, authentify, dataProfil} = require("../../controllers/userControllers/userController");

// Création de "instance router"
const router = express.Router();

// Définition des routes
router.post("/register", upload.single("profil"), registerValidator, validate, register);
router.post("/login", loginValidator, validate, authentify);
router.get("/getProfil", auth, dataProfil);

// Exportation des "routes"
module.exports = router;