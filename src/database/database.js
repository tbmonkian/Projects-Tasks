import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const { DB_USER, DB_PASSWORD, DB_HOST, PORT, DB_NAME } = process.env; //esto es un objeto global que nos brinda NODE.JS

const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${PORT}/${DB_NAME}`;

//const URI= 'postgres://DB_USER:DB_PASSWORD@DB_HOST:PORT/DB_NAME';
export const sequelize = new Sequelize(URI);

