import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const EstadoEmocional = sequelize.define('estadoEmocional', {
   idEstadoEmocional: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
   },
   nombre:{
      type: DataTypes.STRING,
      allowNull: false 
   },
   statusEstadoEmocional:{
      type: DataTypes.ENUM('Activo', 'Inactivo'),
      defaultValue: 'Activo',
      allowNull: false
  }   
},{
    timestamps: false
});







