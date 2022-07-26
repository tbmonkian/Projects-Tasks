import { Router } from "express";
import { getProjects, createProject, updateProject, deleteProject, getProject, getProjectTasks } from '../controllers/projects.controller.js'

const router = Router(); //uso router para agrupar y aislar grupos de rutas de otros grupos, estructuro
//al instanciar Router, ahora pongo las rutas q quiero en esa instancia y pongo otras rutas en otra instancia
//entre otras cosas esto me permite poner un middleware para todas estas rutas juntas, pero no para otras

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects/:id", getProject);

router.get("/projects/:id/tasks", getProjectTasks);

export default router;
