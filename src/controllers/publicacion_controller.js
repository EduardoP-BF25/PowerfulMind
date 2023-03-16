import { Op } from "sequelize";
import { Publicacion} from "../models/publicacion.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import dotevn from 'dotenv'; 
import { body } from "express-validator";

dotevn.config({path: './.env'});

//POST
export const post = async (req, res) => {
    const { imagePublicacion, tituloPublicacion, cuerpoPublicacion, statusPublicacion } = req.body;
    try {
        const nuevaPublicacion = await Publicacion.create({
            imagePublicacion, tituloPublicacion, cuerpoPublicacion, statusPublicacion
        });
        // // const token = jwt.sign(nuevaPublicacion.dataValues, process.env.JWT_KEY);

        res.status(201).json({nuevaPublicacion});
        console.log(nuevaPublicacion);
    } catch (err) {
        res.status(500).json(err);
    }
}


// PUT
export const put = async (req, res) => {
    let { idPublicacion, newimagePublicacion, newtituloPublicacion, newcuerpoPublicacion, } = req.body;
    
    try {
        const actualizarPublicacion = await Publicacion.findOne({ where: {idPublicacion} })
        actualizarPublicacion.tituloPublicacion = tituloPublicacion;
        actualizarPublicacion.imagePublicacion = newimagePublicacion;
        actualizarPublicacion.cuerpoPublicacion = newcuerpoPublicacion;
        // actualizarPublicacion.newStatusPublicacion = statusPublicacion;
        console.log(actualizarPublicacion);
        await actualizarPublicacion.save();
        res.status(201).json(actualizarPublicacion);
    } catch (err) {
        
        res.status(500).json(err);
    }
}



//DELETE

export const drop = async (req, res) => {
    const { idPublicacion} = req.body;
    try {         
        const actualizarPublicacion = await Publicacion.findOne({ where: {idPublicacion} })
        actualizarPublicacion.statusPublicacion = "Inactivo";

        console.log(actualizarPublicacion);
        await actualizarPublicacion.save();
        res.status(201).json(actualizarPublicacion);
    } catch (err) {
        
        res.status(500).json(err);
    }
}



//GET

export const getOne = async (req, res) => {
    const { idPublicacion } = req.body;
    try {
        const findPublicacion = await Publicacion.findOne( { where:{ idPublicacion } });
        res.status(201).json(findPublicacion);
    } catch (err) {
        res.status(500).json(err);
    }
}


//GETS

export const getAll = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll();
        res.status(201).json(publicaciones);

    } catch (err) {
        res.status(500).json(err);
    }
}
