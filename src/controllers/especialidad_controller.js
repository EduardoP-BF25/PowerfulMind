import { Op } from "sequelize";
import { Especialidad } from "../models/especialidad.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import dotevn from 'dotenv'; 
import { body } from "express-validator";
import { Cita } from "../models/cita.js";

dotevn.config({path: './.env'});

//POST
export const post = async (req, res) => {
    const { idEspecialidad, nombre, especialidad, status} = req.body; 
    try { 
        const nuevoEspecialidad = await Especialidad.create({
            idEspecialidad, nombre, especialidad, status
        });
        console.log(body);
        res.status(201).json(nuevoEspecialidad);

   } catch (err) {
      res.status(500).json(err); 
   }
}

//PUT
export const put = async (req, res) => {
    const {idEspecialidad, newNombre, newstatus} = req.body;
    try {
      const actualizarEspecialidad = await Especialidad.findOne( { where: { idEspecialidad } })
      actualizarEspecialidad.nombre = newNombre;
      actualizarEspecialidad.statusEspecialidad = newstatus;

      await actualizarEspecialidad.save();
      res.status(201).json(actualizarEspecialidad);
      console.log(actualizarEspecialidad);
   } catch (err) {
      res.status(500).json(err);
   }
}

//DELETE
export const drop = async (req, res) => {
    const {idEspecialidad} = req.body;
    try {
      const eliminarEspecialidad = await Especialidad.findOne({ where: { idEspecialidad } });
      eliminarEspecialidad.statusEspecialidad = "Inactivo";

      console.log(eliminarEspecialidad);
      await eliminarEspecialidad.save();
      res.status(201).json('Se elimino la "Especialidad correctamente', eliminarEspecialidad);
   } catch (err) {
      res.status(500).json(err);
   }
}

// ACTIVAR ESPECIALIDAD
export const activate = async (req, res) => {
   const {idEspecialidad } = req.body;
   try {         
       const actualizarEspecialidad = await Especialidad.findOne({ where:{ idEspecialidad } });
       actualizarEspecialidad.statusEspecialidad = "Activo";
       console.log(actualizarEspecialidad);
       await actualizarEspecialidad.save();
       res.status(201).json(actualizarEspecialidad);
   } catch (err) {    
       res.status(500).json(err);
   }
}

//GET
export const getOne = async (req, res) => {
   const { idEspecialidad} = req.body;
   try {
        const getEspecialidad = await Especialidad.findOne( { where: {idEspecialidad} });
        res.status(201).json(getEspecialidad);

   } catch (err) {
        res.status(500).json(err);
   }
}

//GETS
export const getAll = async (req, res) => {
    try {
      const Especialidades = await Especialidad.findAll();
      res.status(201).json(Especialidades);

   } catch (err) {
      res.status(500).json(err);
   }
}


