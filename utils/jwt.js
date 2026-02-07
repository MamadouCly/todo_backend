// Importation de bibliothèque "JWT"
const jwt = require("jsonwebtoken");

// Fonction pour générer un token
function generateToken(playload) {
    return jwt.sign(
        playload,
        process.env.SECRET_JWT,
        {expiresIn: process.env.EXPIRES_IN}
    );
}

// Fonction pour vérifier le token
function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET_JWT);
}

// Exportation des fonctions
module.exports = {
    generateToken,
    verifyToken
};