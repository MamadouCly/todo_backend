// Importation de mysql2
const mysql = require("mysql2");

const connection = mysql.createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    ssl: process.env.NODE_ENV === "production" ? {rejectUnauthorized: false} : false,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportation de connexion à la base de données
module.exports = connection.promise();