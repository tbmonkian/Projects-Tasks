import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res)=>{
    try{
        const projects = await Project.findAll(); //me trae todas las rows de la tabla en un array
        // if (!projects){
        //     res.send('No existen projects aún para mostrar');
        // } else{
        res.json(projects);
        //}
    } catch(error){
        return res.status(500).json({message:error.message});
    }

};
export const createProject = async (req, res)=> {
    try{
        const { name, priority, description } = req.body;
        const newProject = await Project.create({
            name,
            priority,
            description
        });
        res.json(newProject);
    } catch(error){
        return res.status().json({message:error.message});        
    }
};
export const updateProject = async (req,res)=>{
    try{
        const { id } = req.params; //traigo el id de params -objeto del url-
        const { name, priority, description } = req.body;
        const project= await Project.findByPk(id); //el id q traje de params ahora lo busco en la tabla
        project.name= name, //esta prop del objeto q tengo será igual a la q ponga en body
        project.priority= priority,
        project.description= description,
        await project.save();
        res.json(project)//simple respuesta
    } catch(error){
        return res.status(500).json({message: error.message})
    }

};
export const deleteProject = async (req,res)=>{
    try{
        const { id } = req.params;
        await Project.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204)
    } catch(error){
        return res.status(500).json({message: error.message})
    }
};
export const getProject = async (req,res)=>{
    try{
        const { id } = req.params;
        const project = await Project.findByPk(id);
        res.json(project);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
};
export const getProjectTasks = async (req,res)=>{
    try{
        const { id } = req.params;
        const tasks= await Task.findAll({
            where: { projectId:id}
        })
        res.json(tasks);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
}