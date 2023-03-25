import { Router } from "express";
import { Usuario } from "../src/models/usuario.js";
import { Paciente } from "../src/models/paciente.js";
import { Publicacion } from "../src/models/publicacion.js";
import { Cita } from "../src/models/cita.js";
import { where } from "sequelize";
export const webRouter = Router();

webRouter.get('/home', async (req, res) => {
    try {

        res.render('dashboard/index');
    } catch (err) {
        res.render('404');
    }
});

webRouter.get('/registrarse', async (req, res) => {
    try {
        console.log(req.query);


        res.render('sesiones/registrarse');
        // await Usuario.create(req.query);        
    } catch (err) {
        res.render('404');
    }   
});

webRouter.get('/web-registro-detalleventa', async (req, res) => {
    try {
        console.log(req.query);
        req.query.StatusId = 1;
        await DetalleVenta.create(req.query);
        res.redirect('https://apidigilist-production.up.railway.app/digilist/detalleventa')
    } catch (err) {
        // res.render('404');
        res.status(403).json(err);
    }
});


webRouter.get('/login', async (req, res) => {
    try {
        res.render('sesiones/login');
    } catch (err) {
        res.render('404');
    }
});

webRouter.get('/usuario/searchAll', async (req, res) => {
    try {
       const usuarios = await Usuario.findAll();
        res.render('dashboard/homeAdmin', {usuarios});
    } catch (err) {
        res.render('404');
    }
 });


// URL DE LA PAGINA
 webRouter.get('/usuario/searchAll/activos', async (req, res) => {
    try {
       const usuario = await Usuario.findAll({where:{ status : "Activo"}});
     //  Ubicacion del archivo
        res.render('dashboard/homeAdmin', usuario);
    } catch (err) {
        res.render('404');
    }
 });
// URL DE LA PAGINA
 webRouter.get('/usuario/searchAll/inactivos', async (req, res) => {
    try {
       const usuario = await Usuario.findAll({where:{ status : "Inactivo"}});
     //   Ubicacion del archivo
        res.render('dashboard/homeAdmin', usuario);
    } catch (err) {
        res.render('404');
    }
 });

 webRouter.get('/homeAdmin/', async (req, res) => {
    try {
        const allUsers = await Usuario.findAll();
        const psicUsers = await Usuario.findAll({ where: {roleUsuario:"Psicologo"}});
        const pacUsers = await Usuario.findAll({ where: {roleUsuario:"Paciente"}});
        const admUsers = await Usuario.findAll({ where: {roleUsuario:"Administrador"}});

        res.render('dashboard/homeAdmin', {allUsers, psicUsers, pacUsers});
    } catch (err) {
        res.render('404');
    }
});

webRouter.get('/homePsicologo', async (req, res) => {
    try {
        res.render('dashboard/homePsicologo');
    } catch (err) {
        res.render('404');
    }
});


//  webRouter.get('/automovil', async (req, res) => {
//     try {
//         const automoviles = await Automovil.findAll({where:{StatusId:1}});
//         const anios = await Years.findAll({where:{StatusId:1}});
//         const marcas = await Marca.findAll({where:{StatusId:1}});
//         const modelos = await Modelo.findAll({where:{StatusId:1}});
//         res.render('dashboard/automovil', { automoviles, anios, marcas, modelos });
//     } catch (err) {
//         res.render('404');
//     }
// });
// webRouter.get('/registrarse', async (req, res) => {
//     try {
//         console.log(req.query);
//         req.query.status = "Activo";
//         await Usuario.create(req.query);
//         res.redirect('https://powerfulmind.up.railway.app/registrarse.html')
//     } catch (err) {
        
//         res.status(403).json(err);
//     }
// });


// webRouter.get('/registrarse', async (req, res) => {
//     try {

//         res.render('sesiones/registrarse');
//     } catch (err) {
        
//         res.status(403).json(err);
//     }
// });