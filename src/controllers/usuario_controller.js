import { Op, where } from "sequelize";
import { Usuario } from "../models/usuario.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import dotevn from 'dotenv'; 
import { body } from "express-validator";

dotevn.config({path: './.env'});

export const login = async  (req, res) => {
    let { correo, password} = req.body; 

    console.log(password);
    try {
        console.log(req.body);
        const getOneUsuario = await Usuario.findOne({where: {[Op.and]: [{password}, {correo}]}});
        console.log("Contraseña incorrecta", getOneUsuario);
        const token = jwt.sign(getOneUsuario.dataValues, process.env.JWT_KEY); 
        console.log(token);
        res.status(201).json([token, getOneUsuario]);
    } catch (err) {
        console.log("error:", err.message); 
        res.status(500).json(err.message);
    }
}

//POST
export const post = async (req, res) => {
    const { nombreUsuario, apellidoUsuario, fechaNacimiento, correo, password, roleUsuario } = req.body;    
    try {
        const usuarioNuevo = await Usuario.create({
            nombreUsuario, apellidoUsuario, fechaNacimiento, correo, password, roleUsuario
        });
        const token = jwt.sign(usuarioNuevo.dataValues, process.env.JWT_KEY);
        console.log(token);
        res.status(201).json({token ,usuarioNuevo});
        console.log(usuarioNuevo);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//PUT
 
export const put = async (req, res) => {
    let { newimageUsuario, newnombreUsuario, newapellidoUsuario, newtelefono, correo, newcorreo, password, newPassword} = req.body;

        password = await bcrypt.hash(password, 10);
        newPassword = await bcrypt.hash(newPassword, 10);
    
    try {
        const actualizarUsuario = await Usuario.findOne({ where: { [Op.and]: [{correo}, {password}] } })
        actualizarUsuario.imageUsuario = newnombreUsuario;
        actualizarUsuario.nombreUsuario = newnombreUsuario;
        actualizarUsuario.apellidoUsuario = newapellidoUsuario;
        actualizarUsuario.correo = newcorreo;
        actualizarUsuario.password = newPassword;
        actualizarUsuario.telefono = newtelefono;
        console.log(actualizarUsuario);
        await actualizarUsuario.save();
        res.status(201).json(actualizarUsuario);
    } catch (err) {      
        res.status(500).json(err);
    }
}

//DELETE

export const drop = async (req, res) => {
    const {idUsuario } = req.body;
    try {         
        const actualizarUsuario = await Usuario.findOne({ where:{ idUsuario } });
        actualizarUsuario.status = "Inactivo";
        // actualizarUsuario.newApellidoUsuario = apellidoUsuario;
        // actualizarUsuario.password = newPassword;
        // actualizarUsuario.telefono = telefono;
        console.log(actualizarUsuario);
        await actualizarUsuario.save();
        res.status(201).json(actualizarUsuario);
    } catch (err) {    
        res.status(500).json(err);
    }
}


//GET

export const getOne = async (req, res) => {
    const { correo } = req.body;
    try {
        const getOneUsuario = await Usuario.findOne({where:{ correo }});
        res.status(201).json(getOneUsuario);
        console.log(getOneUsuario);

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}


//GETS

export const getAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(201).json(usuarios);   
 
    } catch (err) { 
        
        res.status(500).json(err);
    }
}


// GET PSICOLOGOS
export const getAllPsic = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({where:{ roleUsuario: "Psicologo" }});
        res.status(201).json(usuarios);   
 
    } catch (err) { 
        
        res.status(500).json(err);
    }
}

// GET PACIENTES
export const getAllPac = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({where:{ roleUsuario: "Paciente" }});
        res.status(201).json(usuarios);   
 
    } catch (err) { 
        
        res.status(500).json(err);
    }
}


