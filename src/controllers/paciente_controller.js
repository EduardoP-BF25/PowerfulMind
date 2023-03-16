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

        res.status(201).json({nuevoPaciente});
        console.log(nuevoPaciente);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

//PUT
 
export const put = async (req, res) => {
    let { idPaciente, newnombrePaciente, newapellidoPaciente, newcorreoPaciente, newtelefonoPaciente, newfechaNacimiento, newimagePaciente} = req.body;
    
    try {
        const actualizarPaciente = await Paciente.findOne({ where: { idPaciente} })

        actualizarPaciente.imagePaciente = newimagePaciente;
        actualizarPaciente.nombrePaciente = newnombrePaciente;
        actualizarPaciente.apellidoPaciente = newapellidoPaciente;
        actualizarPaciente.password = newPassword;
        actualizarPaciente.telefonoPaciente = newtelefonoPaciente;
        actualizarPaciente.fechaNacimiento = newfechaNacimiento;
        actualizarPaciente.correo = newcorreoPaciente;
        console.log(actualizarPaciente);
        await actualizarPaciente.save();
        res.status(201).json(actualizarPaciente);
    } catch (err) {
        
        res.status(500).json(err);
    }
}


//DELETE

export const drop = async (req, res) => {
    const { idPaciente} = req.body;
    try {         

        const eliminarPaciente = Paciente.findOne({ where: { idPaciente } });
        actualizarPaciente.status
        res.status(201).json('Paciente Eliminado');
        console.log(eliminarPaciente);
        
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



