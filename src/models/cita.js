import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Cita = sequelize.define('cita', {
    idCita: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    // cita:{
    //     type:DataTypes.STRING,
    //     allowNull:false
    // },
    fechaCita:{
        type:DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    horaInicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        
    },
    horaFin: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    estado: {
        type:DataTypes.ENUM('Cancelado','Pospuesto','Disponible', 'No disponible'),
        allowNull:false
    },
    // precio: {
    //     type: DataTypes.DECIMAL,
    //     allowNull: false,
    //     defaultValue: 0
    // },
},{
    timestamps: false
});







