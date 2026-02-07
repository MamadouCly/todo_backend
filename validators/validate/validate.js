// Importation de "express-validator"
const {validationResult} = require("express-validator");

function validate(req, res, next) {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        const err = new Error("Données invalides");
        err.status = 400,

        err.datails = errors.array().map(e => ({
            field: e.path,
            message: e.msg
        }));

        next(err);
    }
    next();
}

// Exportation de la fonction "validate"
module.exports = validate;