// Importation de "multer" et "path"
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

// Fonction pour filtrer les imagas
function fileFilter(req, file, cb) {
    const types = ["image/jpeg", "image/jpg", "image/png"];

    if(types.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Seules les images sont autorisées"), false);
    }
}

const upload = multer({
    storage,
    limits: {fileSize: 200 * 1024 * 1024},
    fileFilter
});

module.exports = upload;