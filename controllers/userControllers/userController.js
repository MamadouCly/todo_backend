// Importation de fonction de model
const userss = require("../../models/userModels/userModels");

// Importation des fonctions de hashage, générateur, vérificateur de token et de reponse
const {hashePassword, comparePassword} = require("../../utils/hash");
const {generateToken} = require("../../utils/jwt");
const {success, error} = require("../../utils/response");
const imagekit = require("../../config/imageKit");

// Fonction créer un compte
async function register(req, res, next) {
    try {
        const {name, email, password} = req.body;  // Récupération des infos utilisateurs

        if(!req.file) {
            const err = new Error("Aucune photo de profil envoyée");
            err.status = 400;
            return next(err);
        }
        const resultImage = await imagekit.upload({
            file: req.file.buffer,
            fileName: Date.now() + "-" + req.file.originalname,
            folder: "/profils"
        });
        const profilUrl = resultImage.url;

        // Hashage du mot de passe
        const hashedPassword = await hashePassword(password);

        // Enregistrement dans la base
        const result = userss.signup(name, email, hashedPassword, profilUrl);
        success(res, 200, result, "Compte crée avec succès");
    } catch(err) {
        err.status = 500;
        next(err);
    }
}

// Fonction pour s'authentifier
async function authentify(req, res, next) {
    try {
        const {email, password} = req.body;
        const users = await userss.login(email);
        
        if(users.length === 0) {
            const err = new Error("Utilisateur non trouvé");
            err.status = 404;
            return next(err);
        }
        const user = users[0];
        
        const isValid = await comparePassword(password, user.user_password);

        if(!isValid) {
            const err = new Error("Mot de passe incorrect");
            err.status = 401;
            return next(err);
        }
        const token = generateToken({id: user.id, email: user.user_email});

        success(res, 200, token, "Connexion réussie");
    } catch(err) {
        err.status = 500;
        next(err);
    }
}

// Fonction pour récuperer les données utilisateur
async function dataProfil(req, res, next) {
    const id = req.user.id;
    try {
        const result = await userss.getProfil(id);
        if(result.length === 0) {
            const err = new Error("Utilisateur non trouvé");
            err.status = 404;
            return next(err);
        }
        const userData = result[0];
        success(res, 200, userData);
    } catch(err) {
        err.status = err.status || 500;
        next(err);
    }
}

// Exportation des fonction de contrôleur
module.exports = {
    register,
    authentify,
    dataProfil
};