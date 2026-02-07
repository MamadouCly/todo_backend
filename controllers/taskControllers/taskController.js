const tasks = require("../../models/taskModel/taskModel");
const {success} = require("../../utils/response");

// Fonction pour ajouter une tâche
async function createTask(req, res, next) {
    const {title} = req.body;
    const id = req.user.id;

    try {
        const result = await tasks.addTask(title, false, id);
        success(res, 200, result, "Tâche ajoutée avec succès");
    } catch(err) {
        err.status = 500;
        next(err);
    }
}

// Fonction pour récupérer les tâches de l'utilisateur
async function taks(req, res, next) {
    const id = req.user.id;

    try {
        const result = await tasks.getTasks(id);
        /*if(result.length === 0) {
            const err = new Error("Aucune tâche trouvée");
            err.status = 404;
            return next(err);
        }*/

        success(res, 200, result);
    } catch(err) {
        err.status = err.status || 500;
        next(err);
    }
}

module.exports = {
    createTask,
    taks
};