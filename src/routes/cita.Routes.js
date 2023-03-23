import { Router } from "express";
import * as citaController from "../controllers/cita_controller.js";
import { authentification, authorization } from "../middlewares/authorize.js";
import { validaCamposCita } from "../validators/validate_cita.js";
import { validateReutilizable } from "../validators/validate_reutilizable.js";

const citaRouter = Router();

citaRouter.post('/add', validaCamposCita, validateReutilizable, citaController.post);
citaRouter.put('/update', authentification, citaController.put);
citaRouter.delete('/delete', authentification, authorization, citaController.drop);
citaRouter.get('/searchOne', authentification, authorization, citaController.getOne);
citaRouter.get('/searchAll', authentification, authorization, citaController.getAll);

export default citaRouter;
