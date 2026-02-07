// Importation de "express-validator"
const {body} = require("express-validator");

// Règles pour la validation des données
const registerValidator = [
    body("name").notEmpty().withMessage("Le nom est obligatoire")
    .isLength({min: 3}).withMessage("Nom trop court"),

    body("email").notEmpty().withMessage("Email obligatoire")
    .isEmail().withMessage("Format email invalide"),

    body("password").notEmpty().withMessage("Mot de passe est obligatoire")
    .isLength({min: 4}).withMessage("Mot de passe doit contenir au moins 4 caractères")
];

// Exportation des règles de validation
module.exports = registerValidator;