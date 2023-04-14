import { Router } from "express";
import * as especialidadController from "../controllers/especialidad_controller.js";
import { authentification, authorization } from "../middlewares/authorize.js";
import { validateReutilizable } from "../validators/validate_reutilizable.js";

const especialidadRouter = Router();

especialidadRouter.post('/add', validateReutilizable, especialidadController.post);
especialidadRouter.put('/update', authentification, especialidadController.put);
especialidadRouter.delete('/delete', authentification, authorization, especialidadController.drop);
especialidadRouter.put('/activate', authentification, especialidadController.activate);
especialidadRouter.get('/searchOne', especialidadController.getOne);
especialidadRouter.get('/searchAll', especialidadController.getAll);

export default especialidadRouter;
