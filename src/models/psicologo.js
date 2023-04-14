import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Usuario } from "./usuario.js";


export const Psicologo = sequelize.define('psicologo', { 
   edad:{
      type: DataTypes.DATEONLY,
      allowNull: false,
  },
}, {
    timestamps: false
});


Psicologo.belongsTo(Usuario);
Usuario.hasOne(Psicologo, {
    foreignKey: {
        allowNull: true
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
