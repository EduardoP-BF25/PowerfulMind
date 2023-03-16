import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Usuario } from "./usuario.js";

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
        type: DataTypes.STRING,
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
}, {
    timestamps: false
});


Publicacion.belongsTo(Usuario);
Usuario.hasMany(Publicacion, {
    foreignKey: {
        allowNull: true
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})



