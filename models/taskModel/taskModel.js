const connection = require("../../config/db");

// Fonction pour ajouter une tâche
async function addTask(title, completed, user_id) {
    const sql = "INSERT INTO tasks (task_name, completed, user_id) VALUES (?, ?, ?)";
    const [result] = await connection.query(sql, [title, completed, user_id]);
    return result;
}

// Fonction pour récupérer les tâches de l'utilisateur
async function getTasks(user_id) {
    const sql = "SELECT task_name FROM tasks WHERE user_id = ?";
    const [rows] = await connection.query(sql, [user_id]);
    return rows;
}

module.exports = {
    addTask,
    getTasks
};