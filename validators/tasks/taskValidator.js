const {body} = require("express-validator");

// Règles pour la validation des tâches
const taskValdator = [
    body("title").notEmpty().withMessage("Tâche obligatoire")
    .isLength({min: 2}).withMessage("Titre trop court")
];

module.exports = taskValdator;