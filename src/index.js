import app from './app.js';
import { sequelize } from './database/database.js';
import dotenv from 'dotenv';

dotenv.config();
const { PORT } = process.env; //npm i dotenv y ahí puedo usar process.env y luego como si fueran props
//si en .env pongo PORT o NAME o lo q fuere, acá lo uso como si fuera una prop luego de env
//importo dotenv y pongo dotenv.config()
console.log(PORT)

async function main(){
    try{
        await sequelize.authenticate(); //esto es sólo para probar la conexión
        console.log('Connection has been established successfully');
        await sequelize.sync() //sincroniza con la db
//si no existen tablas las crea, si ya existen no hace nada.
//models.sync() xa el modelo, sequelize.sync() para todos los modelos juntos.
        app.listen(PORT);
        console.log(`Server is listening on port: ${PORT}`);
    } catch (error) {
        console.log('Unable to connect to the database: ',error);
    }
}

main();