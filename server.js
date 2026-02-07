// Configuration de pour acceder à la variable d'environnement
require("dotenv").config();

// Importation du port
const PORT = process.env.PORT_NODE || 3000;

// Importation de l'application
const app = require("./src/app");

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});