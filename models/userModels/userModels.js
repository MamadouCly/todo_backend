// Imporation de la connxion à la base
const connection = require("../../config/db");

// Fonction pour enregistrer un utilisateur dans la base
async function signup(name, email, password, profil) {
    const sql = "INSERT INTO users (user_name, user_email, user_password, user_profil, created_at) VALUES (?, ?, ?, ?, NOW())";
    const [result] = await connection.query(sql, [name, email, password, profil]);
    return result;
}

// Fonction pour s'authentifier
async function login(email) {
    const sql = "SELECT * FROM users WHERE user_email = ?";
    const [rows] = await connection.query(sql, [email]);
    return rows;
}

// Fonction pour récuperer les données utilisateur
async function getProfil(id) {
    const sql = "SELECT user_name, user_profil FROM users WHERE id = ?";
    const [rows] = await connection.query(sql, [id]);
    return rows;
}

// Exportation des fonctions de model
module.exports = {
    signup,
    login,
    getProfil
};