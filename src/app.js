import express, { Router } from "express";
import { Sequelize } from "sequelize";
import { authentification } from './middlewares/authorize.js';
import dotevn from 'dotenv';
import cors from 'cors';
import usuarioRouter from "./routes/usuario.Routes.js";
import pacienteRouter from "./routes/paciente.Routes.js";
import publicacionRouter from "./routes/publicacion.Routes.js";
import citaRouter from "./routes/cita.Routes.js";
import estadoEmocionalRouter from "./routes/estadoEmocional.Routes.js";
import especialidadRouter from "./routes/especialidad.Routes.js";


import { webRouter } from "../web/routes.js";

dotevn.config({ path: './.env' });

const app = express();

app.use('/', express.static('./public'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.json());
app.use('/usuario', usuarioRouter);
app.use('/paciente', pacienteRouter);
app.use('/publicacion', publicacionRouter);
app.use('/cita', citaRouter);
app.use('/estadoEmocional', estadoEmocionalRouter);
app.use('/especialidad', especialidadRouter);
app.use('/paciente', pacienteRouter);
app.use('/powerfulMind', webRouter);


export default app;