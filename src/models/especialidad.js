import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Especialidad = sequelize.define('especialidad', {
   idEspecialidad: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
   },
   nombre:{
      type: DataTypes.STRING,
      allowNull: false 

   },
   statusEspecialidad: {
      type: DataTypes.ENUM('Activo', 'Inactivo'),
      defaultValue: 'Activo',
      allowNull: false
   
   } 
},{
    timestamps: false
});







