// Imporation de bibliothèque "bcrypt"
const bcrypt = require("bcrypt");

// Fonction pour hasher un mot de passe
async function hashePassword(password) {
    return await bcrypt.hash(password, 10);
}

// Fonction pour comparer les mot de passe
async function comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

// Exportation des fonctions
module.exports = {
    hashePassword,
    comparePassword
};