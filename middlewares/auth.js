// Importation de fonction vérificarice de "token"
const {verifyToken} = require("../utils/jwt")

// Middleware d'authenfication
async function auth(req, res, next) {
    try {
        const header = req.headers.authorization;
        if(!header) {
            const err = new Error("Token manquant");
            err.status = 401;
            return next(err);
        }

        const token = header.split(" ")[1];
        if(!token) {
            const err = new Error("Token manquant");
            err.status = 401;
            return next(err);
        }

        const decoded = verifyToken(token);

        if(!decoded) {
            const err = new Error("Token invalide ou expiré");
            err.status = 401;
            return next(err);
        }
        req.user = decoded;
        next();
    } catch(err) {
        err.status = err.status || 500;
        next(err);
    }
}

// Exportation
module.exports = auth;