import { Router } from "express";
import * as pacienteController from "../controllers/paciente_controller.js";
import { authentification, authorization } from "../middlewares/authorize.js";
import { validateReutilizable } from "../validators/validate_reutilizable.js";

const pacienteRouter = Router();

pacienteRouter.post('/add', validateReutilizable, pacienteController.post);
pacienteRouter.put('/update', authentification, pacienteController.put);
pacienteRouter.delete('/delete', authentification, authorization, pacienteController.drop);
pacienteRouter.get('/searchOne', authentification, authorization, pacienteController.getOne);
pacienteRouter.get('/searchAll', authentification, authorization, pacienteController.getAll);

export default pacienteRouter;
