import express, { Router } from "express";
import { Sequelize } from "sequelize";
import { authentification} from './src/middlewares/authorize.js';
import dotevn from 'dotenv';
import cors from 'cors';
import usuarioRouter from "./src/routes/usuarioRoutes.js";
// import pacienteRouter from "./routes/pacienteRoutes.js";
// import publicacionRouter from "./routes/publicacionRoutes.js";
// import citaRouter from "./routes/citaRoutes.js";

dotevn.config({path: './.env'});

const app = express();

app.use('/', express.static('./PowerfulMindWebAct'));
app.use(cors())
app.use(express.json());
app.use('/usuario', usuarioRouter); 
// app.use('/paciente', pacienteRouter);
// app.use('/publicacion', publicacionRouter);
// app.use('/cita', citaRouter);
// app.use('/paciente', pacienteRouter );

export default app;