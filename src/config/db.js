import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config({ path : './.env'});

console.log(process.env.DB_PASS);

// export const sequelize = new Sequelize("");

export const sequelize = new Sequelize('powerfulmind', 'postgres', process.env.DB_PASS,{
    host: 'localhost',
    dialect: 'postgres'
});

// module.exports = { sequelize };