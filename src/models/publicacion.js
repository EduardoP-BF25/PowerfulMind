import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
// import { Usuario } from "./usuario.js";
import { Psicologo } from "./psicologo.js";

export const Publicacion = sequelize.define('publicacion', { 
    idPublicacion: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    imagePublicacion:{
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false
    },
    tituloPublicacion:{
      type: DataTypes.STRING,
      allowNull: false 
    },
    cuerpoPublicacion:{
        type: DataTypes.TEXT,
        allowNull: false 
    },
    fechaRegistroPublicacion:{
        type:DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    statusPublicacion:{
        type: DataTypes.ENUM('Activo', 'Inactivo'),
        defaultValue: 'Activo',
        allowNull: false,
        
    },
    vistas:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
}, {
    timestamps: false
});


Publicacion.belongsTo(Psicologo);
Psicologo.hasMany(Publicacion, {
    foreignKey: {
        allowNull: true
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})



 


