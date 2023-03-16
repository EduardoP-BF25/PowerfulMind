import { Op } from "sequelize";
import { Cita } from "../models/cita.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import dotevn from 'dotenv'; 
import { body } from "express-validator";

dotevn.config({path: './.env'});

//POST
export const post = async (req, res) => {
    const { fechaCita, horaInicio, horaFin, estado} = req.body; 
    try { 
        const nuevaCita = await Cita.create({
            fechaCita, horaInicio, horaFin, estado
        });
        console.log(body);
        res.status(201).json(nuevaCita);

    } catch (err) {
        res.status(500).json(err); 
    }
}
//PUT
export const put = async (req, res) => {
    const { Cita, idCita, nuevaCita } = req.body;
    try {
        const actualizarCita = await Cita.findOne( { where: { [Op.and]: [{idCita}, {Cita} ] } })
        actualizarCita.Cita = nuevaCita;
        await actualizarCita.save();
        res.status(201).json(actualizarCita);
    } catch (err) {
        res.status(500).json(err);
    }
}
//DELETE
export const drop = async (req, res) => {
    const {idCita} = req.body;
    try {
        const eliminarCita = Cita.destroy({ where: { idCita } });
        res.status(201).json('Se elimino Cita correctamente'); 

    } catch (err) {
        res.status(500).json(err);
    }
}
//GET

export const getOne = async (req, res) => {
    const { idCita} = req.body;
    try {
        const Cita = await Cita.findOne( { where:   {idCita}  });
        res.status(201).json(Cita);

    } catch (err) {
        res.status(500).json(err);
    }
}

//GETS
export const getAll = async (req, res) => {
    try {
        const Citas = await Cita.findAll();
        res.status(201).json(Citas);

    } catch (err) {
        res.status(500).json(err);
    }
}


