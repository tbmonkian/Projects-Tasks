import app from './app.js';
import { sequelize } from './database/database.js';

// import './models/Project.js';
// import './models/Task.js'; La idea no es crear las tablas acá al inicio, sino en las rutas cuando se pida.

async function main(){
    try{
        // await sequelize.authenticate(); //esto es sólo para probar la conexión
        // console.log('Connection has been established successfully');
        await sequelize.sync() //sincroniza con la db
//si no existen tablas las crea, si ya existen no hace nada.
//models.sync() xa el modelo, sequelize.sync() para todos los modelos juntos.
        app.listen(3000);
        console.log('Server is listening on port ', 3000);
    } catch (error) {
        console.log('Unable to connect to the database: ',error);
    }
}

main();