import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config({ path : './.env'});

console.log(process.env.DB_PASS);

export const sequelize = new Sequelize("postgresql://postgres:nehTzGTZn5vwGet1pt69@containers-us-west-183.railway.app:6738/railway");



// export const sequelize = new Sequelize('powerfulmind', 'postgres', process.env.DB_PASS,{
//     host: 'localhost',
//     dialect: 'postgres'
// });

// module.exports = { sequelize };