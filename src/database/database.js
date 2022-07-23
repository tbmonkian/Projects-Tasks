import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'prueba1', 'postgres', 'Recontra22',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);