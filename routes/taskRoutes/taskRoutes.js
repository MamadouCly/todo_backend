const express = require("express");

// Importation des règles de validation des données
const taskValidator = require("../../validators/tasks/taskValidator");
const validate = require("../../validators/validate/validate");

// Importation des fonction de contrôleur via la destructuration
const {createTask, taks} = require("../../controllers/taskControllers/taskController");

// Importation de middleware d'authentification
const auth = require("../../middlewares/auth");

// Création de "instance router"
const taskRouter = express.Router();

// Définition des routes
taskRouter.post("/addTask", auth, taskValidator, validate, createTask);
taskRouter.get("/getTasks", auth, taks);

// Exportation de route
module.exports = taskRouter;