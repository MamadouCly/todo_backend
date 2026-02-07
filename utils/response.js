function success(res, status, data = null, message = "Succès") {
    return res.status(status).json({
        success: true,
        message,
        data
    });
}

function error(res, status = 500, message = "Erreur") {
    return res.status(status).json({
        success: false,
        message,
    });
}

// Exportation des fonctions
module.exports = {
    success,
    error
};