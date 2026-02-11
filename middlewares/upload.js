// Importation de "multer"
const multer = require("multer");

const storage = multer.memoryStorage();

// Fonction pour filtrer les imagas
function fileFilter(req, file, cb) {
    const types = ["image/jpeg", "image/jpg", "image/png"];

    if(types.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Seules les images sont autorisées"), false);
    }
}

// Upload middleware
const upload = multer({
    storage,
    fileFilter,
    limits: {fileSize: 2000 * 1024 * 1024}
});

module.exports = upload;