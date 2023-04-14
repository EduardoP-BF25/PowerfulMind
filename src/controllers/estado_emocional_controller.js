import { Op } from "sequelize";
import { EstadoEmocional } from "../models/estadoEmocional.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import dotevn from 'dotenv'; 
import { body } from "express-validator";

dotevn.config({path: './.env'});

//POST
export const post = async (req, res) => {
    const { idEstadoEmocional, nombre, especialidad, status} = req.body; 
    try { 
        const nuevoEstadoEmocional = await EstadoEmocional.create({
            idEstadoEmocional, nombre, especialidad, status
        });
        console.log(body);
        res.status(201).json(nuevoEstadoEmocional);

   } catch (err) {
      res.status(500).json(err); 
   }
}

//PUT
export const put = async (req, res) => {
    const {idEstadoEmocional, nombre} = req.body;
    try {
      const actualizarEstadoEmocional = await EstadoEmocional.findOne( { where: { idEstadoEmocional } })
      actualizarEstadoEmocional.nombre = nombre;
      // actualizarEstadoEmocional.especialidad = newEspecialidad;
      console.log(actualizarEstadoEmocional);
      await actualizarEstadoEmocional.save();
      res.status(201).json("Se actualizaron los datos del Estado Emocional", actualizarEstadoEmocional);

   } catch (err) {
      res.status(500).json(err);
   }
}

//DELETE
export const drop = async (req, res) => {
    const {idEstadoEmocional} = req.body;
    try {
      const eliminarEstadoEmocional = await EstadoEmocional.findOne({ where: { idEstadoEmocional } });
      eliminarEstadoEmocional.statusEstadoEmocional = "Inactivo";

      console.log(eliminarEstadoEmocional);
      await eliminarEstadoEmocional.save();
      res.status(201).json('Se elimino el "Estado Emocional" correctamente', eliminarEstadoEmocional);
   } catch (err) {
      res.status(500).json(err);
   }
}

// ACTIVAR ESTADO EMOCIONAL
export const activate = async (req, res) => {
   const {idEstadoEmocional } = req.body;
   try {         
       const actualizarEstadoEmocional = await EstadoEmocional.findOne({ where:{ idEstadoEmocional } });
       actualizarEstadoEmocional.statusEstadoEmocional = "Activo";
       console.log(actualizarEstadoEmocional);
       await actualizarEstadoEmocional.save();
       res.status(201).json(actualizarEstadoEmocional);
   } catch (err) {    
       res.status(500).json(err);
   }
}

//GET
export const getOne = async (req, res) => {
   const { idEstadoEmocional} = req.body;
   try {
        const getEstadoEmocional = await EstadoEmocional.findOne( { where: {idEstadoEmocional} });
        res.status(201).json(getEstadoEmocional);

   } catch (err) {
        res.status(500).json(err);
   }
}

//GETS
export const getAll = async (req, res) => {
    try {
      const EstadosEmocionales = await EstadoEmocional.findAll();
      res.status(201).json(EstadosEmocionales);

   } catch (err) {
      res.status(500).json(err);
   }
}


