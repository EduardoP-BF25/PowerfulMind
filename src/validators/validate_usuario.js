import { sequelize } from "../config/db.js";
import { DataTypes, Op } from "sequelize";
import { Usuario } from "../models/usuario.js";
import { check } from "express-validator";


export const validateTodo = async (email, password, msg) => {
    const user = await Usuario.findOne({
        where: { [Op.and]: [{ email }, { password }] }
    });
    //null, undefined, NaN, "", [], {} son valores falsos
    if (!user) throw new Error(msg);
}


const validateRole = ['Administrador', 'Psicologo', 'Paciente'];
export const validaCamposUsuario = [
    check('nombreUsuario')
        .not().isEmpty().withMessage('El nombre es requerido').matches(/^[a-zA-Z]+$/)
        .withMessage('El nombre solo puede contener letras'),
    check('apellidoUsuario')
        .not().isEmpty().withMessage('El apellido es requerido').matches(/^[a-zA-Z]+$/)
        .withMessage('El apellido solo puede contener letras'),
    check('correo')
        .not().isEmpty().withMessage('El email es requerido').isEmail().withMessage('Debe proporcionar un email valido, <ejemplo@gmail.com>'),
    check('password')
        .not().isEmpty().withMessage('El campo contraseña es requerido').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%_*?&])[A-Za-z\d@$!%_*?&]{8,}$/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un signo'),
    check('roleUsuario')
        .not().isEmpty().withMessage('El role es requerido').isIn(validateRole)
        .withMessage('El rol proporcionado no es válido <Administrador> || <Psicologo> || <Paciente>')
];

export const validaCamposUsuarioActualizar = [
    check('userNombre')
        .not().isEmpty().withMessage('El nombre es requerido').matches(/^[a-zA-Z]+$/)
        .withMessage('El nombre solo puede contener letras'),
    check('usuarioApellido')
        .not().isEmpty().withMessage('El apellido es requerido').matches(/^[a-zA-Z]+$/)
        .withMessage('El apellido solo puede contener letras'),
    check('email')
        .not().isEmpty().withMessage('El email es requerido').isEmail().withMessage('Debe proporcionar un email valido, <ejemplo@gmail.com>'),
    check('password')
        .not().isEmpty().withMessage('La contraseña es requerida').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*_?&]{8,}$/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un signo'),
    check('passwordNuevo')
        .not().isEmpty().withMessage('La contraseña es requerida').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*_?&]{8,}$/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un signo')
];



