import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Paciente = sequelize.define('paciente',{
    idPaciente: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    imagePaciente:{
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false
    },
    nombrePaciente: {
        type: DataTypes.STRING,
        allowNull: false

    },
    apellidoPaciente: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    telefonoPaciente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correoPaciente: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    fechaNacimiento:{
        type: DataTypes.DATE,
        allowNull: false        
    },
    fechaRegistro: {
        type: DataTypes.DATEONLY,
        allowNull:  false,
        defaultValue: DataTypes.NOW,
    },
},  {
        timestamps: false
    }
);


// Paciente.belongsTo(Usuario);
// Usuario.hasMany(Paciente, {
//     foreignKey: {
//         allowNull: true
//     },
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE'
// })

