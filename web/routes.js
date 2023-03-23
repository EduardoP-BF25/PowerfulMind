import { Router } from "express";
import { Usuario } from "../src/models/usuario.js";
import { Paciente } from "../src/models/paciente.js";
import { Publicacion } from "../src/models/publicacion.js";
import { Cita } from "../src/models/cita.js";
import { where } from "sequelize";
export const webRouter = Router();

webRouter.get('/register', async (req, res) => {
    try {
        res.render('register');
    } catch (err) {
        res.render('404');
    }
});

webRouter.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.render('404');
    }
});

webRouter.get('/home', async (req, res) => {

    try {
        res.render('home');
    } catch (err) {
        res.render('404');
    }
});

webRouter.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard/main');
    } catch (err) {
        res.render('404');
    }
});


webRouter.get('/registrarse', async (req, res) => {
    try {
        console.log(req.query);
        req.query.status = "Inactvo";
        await Usuario.create(req.query);
        res.redirect('https://powerfulmind.up.railway.app/registrarse.html')
    } catch (err) {
        
        res.status(403).json(err);
    }
});
