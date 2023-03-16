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
    let { imagePublicacion, tituloPublicacion, cuerpoPublicacion, } = req.body;

        password = await bcrypt.hash(password, 10);
        newPassword = await bcrypt.hash(newPassword, 10);
    
    try {
        const actualizarPublicacion = await Publicacion.findOne({ where: { [Op.and]: [{correo}, {password}] } })
        actualizarPublicacion.newTituloPub = tituloPublicacion;
        actualizarPublicacion.newImagenPub = imagePublicacion;
        actualizarPublicacion.newcuerpoPub= cuerpoPublicacion;
        actualizarPublicacion.newStatusPublicacion = statusPublicacion;

        console.log(actualizarPublicacion);
        await actualizarPublicacion.save();
        res.status(201).json(actualizarPublicacion);
    } catch (err) {
        
        res.status(500).json(err);
    }
}



//DELETE

export const drop = async (req, res) => {
    const { correo} = req.body;
    try {         
        const actualizarUsuario = await Usuario.findOne({ where: { [Op]: [{correo}] } })
        actualizarUsuario.newNombreUsuario = nombreUsuario;
        actualizarUsuario.newApellidoUsuario = apellidoUsuario;
        actualizarUsuario.password = newPassword;
        actualizarUsuario.telefono = telefono;
        console.log(actualizarUsuario);
        await actualizarUsuario.save();
        res.status(201).json(actualizarUsuario);
    } catch (err) {
        
        res.status(500).json(err);
    }
}



//GET

export const getOne = async (req, res) => {
    const { idCublicacion } = req.body;
    try {
        const nuevoCublicacion = await Cublicacion.findOne( { where:{ idCublicacion } });
        res.status(201).json(nuevoCublicacion);

    } catch (err) {
        res.status(500).json(err);
    }
}


//GETS

export const getAll = async (req, res) => {
    try {
        const cublicacions = await Cublicacion.findAll();
        res.status(201).json(cublicacions);

    } catch (err) {
        res.status(500).json(err);
    }
}
