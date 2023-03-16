import { Op } from "sequelize";
import { Paciente } from "../models/paciente.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import dotevn from 'dotenv'; 
import { body } from "express-validator";

dotevn.config({path: './.env'});

//POST
export const post = async (req, res) => {
    const { nombrePaciente, apellidoPaciente, correoPaciente, telefonoPaciente, fechaNacimiento, imagePaciente} = req.body;    
    try {
        // req.body.password = await bcrypt.hash(req.body.password, 10);
        const nuevoPaciente = await Paciente.create({
            nombrePaciente, apellidoPaciente, correoPaciente, telefonoPaciente, fechaNacimiento, imagePaciente
        });
        
        console.log(token);
        res.status(201).json({token ,nuevoPaciente});
        console.log(nuevoPaciente);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//PUT
 
export const put = async (req, res) => {
    let { 
        nombrePaciente, apellidoPaciente, correoPaciente, telefonoPaciente, fechaNacimiento, imagePaciente
    } = req.body;

        password = await bcrypt.hash(password, 10);
        newPassword = await bcrypt.hash(newPassword, 10);
    
    try {
        const actualizarPaciente = await Paciente.findOne({ where: { [Op.and]: [{correo}, {password}] } })

        actualizarPaciente.imagePaciente = imagePaciente;
        actualizarPaciente.newNombrePaciente = nombrePaciente;
        actualizarPaciente.newApellidoPaciente = apellidoPaciente;
        actualizarPaciente.password = newPassword;
        actualizarPaciente.telefonoPaciente = telefonoPaciente;
        actualizarPaciente.fechaNacimiento = fechaNacimiento;
        actualizarPaciente.correo = correoPaciente;
        console.log(actualizarPaciente);
        await actualizarPaciente.save();
        res.status(201).json(actualizarPaciente);
    } catch (err) {
        
        res.status(500).json(err);
    }
}


//DELETE

export const drop = async (req, res) => {
    const { curp} = req.body;
    try {         

        const eliminarPaciente = Paciente.destroy({ where: { curp } });
        res.status(201).json('Paciente Eliminado');
        console.log(eliminarPaciente);
        console.log(err);
    } catch (err) {
        
        res.status(500).json(err);
    }
}


//GET

export const getOne = async (req, res) => {
    const { curp } = req.body;
    try {
        const getOnePaciente = await Paciente.findOne({where:{curp}});
        res.status(201).json(getOnePaciente);
        console.log(getOnePaciente);

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}


//GETS

export const getAll = async (req, res) => {
    try {
        const Pacientes = await Paciente.findAll();
        res.status(201).json(Pacientes);   
 
    } catch (err) { 
        
        res.status(500).json(err);
    }
}



