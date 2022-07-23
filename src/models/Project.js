import { DataTypes } from 'sequelize';
//este es un objeto de la librería de gran tamaño que contiene los tipos de datos que puedo usar en sequelize
import { sequelize } from '../database/database.js';
//importo la instancia que cree de sequelize -cada instancia de sequelize es una conexión distinta-
import { Task } from './Task.js';

//Armo el SCHEMA y lo exporto:
//Puedo crear tablas a través del método define( ) o de init( ) si uso clases.
export const Project= sequelize.define('projects',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, //que el nro no se repita
        autoIncrement: true,
//Con Sequelize no es necesario identificar tablas con primary key, lo hace solo, incluso incremental
    },
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.STRING,
    },
})
// A partir de este esquema armo mis tablas

//Genero relación uno a muchos con el método hasMany() muchas tareas con un solo proyecto
Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id' //que enlace la foreignKey con el id del esquema Project
})
Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
})