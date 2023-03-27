import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Usuario = sequelize.define('usuario', { 
    idUsuario: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    imageUsuario:{
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false
    },
    telefono:{
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false
    },
    nombreUsuario:{
        type: DataTypes.STRING,
        allowNull:false
    },
    apellidoUsuario:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaNacimiento:{
        type: DataTypes.DATE,
        allowNull: false
    },
    correo:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    roleUsuario:{ 
        type: DataTypes.ENUM('Psicologo', 'Administrador', 'Paciente'), 
        allowNull:false
    },
    fechaRegistroUsuario:{
        type:DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    statusUsuario:{
        type: DataTypes.ENUM('Activo', 'Inactivo'),
        defaultValue: 'Activo',
        allowNull: false
        
    }
}, {
    timestamps: false
});

