import { Task } from '../models/Task.js';

export const getTasks = async (req,res)=>{
    try{
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
};
export const createTask = async (req,res)=>{
    try{
        const { name, done, projectId } = req.body;
        console.log(name);
        const newTask = await Task.create({
            name,
            done,
            projectId
        });
        res.json(newTask);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
};
export const updateTask = async (req,res)=>{
    try{
        const { id } = req.params;
        const { name, projectId } = req.body;
        const task = await Task.findByPk(id);
        task.name= name,
        //task.done= done,
        task.projectId= projectId,
        await task.save();
        res.json(task);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
};
// Otra forma más fácil es con el método Set():
// const task= await Task.findOne({
//     where: { id },
// });
// task.set(req.body); Sería como q a task le setee el body del requerimiento
// await task.save();
// return res.json(task);
// Con esto, modifica sólo los parámetros q le meto en body en la consulta
//en la consulta solo puedo poner 1 parámetro, el q quiero cambiar, el resto quedan igual
export const deleteTask = async (req,res)=>{
    try{
        const { id } = req.params;
        await Task.destroy({
            where:{
                id
            }
        });
        res.sendStatus(204);
    } catch(error){
        return res.status(500).json({message: error.message});
    }
};
export const getTask = async (req,res)=>{
    try{
        const { id } = req.params; //leo lo q me piden -yo soy server-
        const task= await Task.findByPk(id); //lo encuentro entre mis datos
        res.json(task); //devuelvo como respuesta ya q es lo q me piden
    } catch(error){
        return res.status(500).json({message: error.message});
    }
};