// Importation de "express-validator"
const {body} = require("express-validator");

const loginValidator = [
    body("email").notEmpty().withMessage("Email obligatoire")
    .isEmail().withMessage("Format email invalide"),

    body("password").notEmpty().withMessage("Mot de passe obligatoire")
];

// Exportation des règles de validation
module.exports = loginValidator;