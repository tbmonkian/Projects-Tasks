import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Task= sequelize.define('task',{ //estoy creando la clase Task
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    projectId: {
        type: DataTypes.INTEGER,
    },
    //timestamps: false,
})
