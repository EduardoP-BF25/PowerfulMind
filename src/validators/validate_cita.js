import { sequelize } from "../config/db.js";
import { DataTypes, Op } from "sequelize";
import { Cita } from "../models/cita.js";
import { check } from "express-validator";

export const validateEstadoCita = ['Cancelado', 'Pospuesto','Disponible', 'No disponible'];

export const validateTodo = async (idCita, fechaCita, horaInicio, msg) => {
    const user = await Cita.findOne({
        where: { [Op.and]: [{ idCita }, { fechaCita}, { horaInicio} ]}
    });

    if (!user) throw new Error(msg);
}

export const validaCamposCita = [
    check('fechaCita')
        .not().isEmpty().withMessage('El campo fecha es requerido para continuar ').matches(/^[dd-mm-yy]+$/)
        .withMessage('El fecha solo puede contener numeros'),
    check('horaInicio')
        .not().isEmpty().withMessage('El campo hora es requerido para continuar').matches(/^[00:00:0000]+$/)
        .withMessage('El campo hora solo puede contener numeros'),
    check('horaFin')
        .not().isEmpty().withMessage('El campo hora es requerido para continuar').matches(/^[00:00:0000]+$/)
        .withMessage('El campo hora solo puede contener numeros'),  
    check('estado')
        .not().isEmpty().withMessage('El campo  es requerido para continuar').isIn(validateEstadoCita)
        .withMessage('El proporcionado no es válido \n  las opciones son: <Cancelado> || <Pospuesto> || <Disponible> || <No disponible>'),
    check('precio')
        .not().isEmpty().withMessage('El campo precio es requerido').isFloat({ min: 0 })
        .withMessage('El precio debe ser un número'),
];

export const validaCamposCitaActualizar = [
    check('userNombre')
        .not().isEmpty().withMessage('El nombre es requerido para continuar').matches(/^[a-zA-Z]+$/)
        .withMessage('El nombre solo puede contener letras'),
    check('CitaApellido')
        .not().isEmpty().withMessage('El apellido es requerido para continuar').matches(/^[a-zA-Z]+$/)
        .withMessage('El apellido solo puede contener letras'),
    check('telefono')
        .not().isEmpty().withMessage('El teléfono es requerido para continuar').isNumeric().withMessage('El teléfono debe ser un número válido').isLength({ min: 10, max: 10 })
        .withMessage('El número de teléfono debe tener 10 digitos'),
    check('email')
        .not().isEmpty().withMessage('El email es requerido para continuar').isEmail().withMessage('Debe proporcionar un email valido, <ejemplo@gmail.com>'),
    check('password')
        .not().isEmpty().withMessage('La contraseña es requerida').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un signo'),
    check('passwordNuevo')
        .not().isEmpty().withMessage('La contraseña es requerida').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un signo')
];
