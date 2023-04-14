import { Router } from "express";
import * as estadoEmocionalController from "../controllers/estado_emocional_controller.js";
import { authentification, authorization } from "../middlewares/authorize.js";
import { validateReutilizable } from "../validators/validate_reutilizable.js";

const estadoEmocionalRouter = Router();

estadoEmocionalRouter.post('/add', validateReutilizable, estadoEmocionalController.post);
estadoEmocionalRouter.put('/update', authentification, estadoEmocionalController.put);
estadoEmocionalRouter.delete('/delete', authentification, authorization, estadoEmocionalController.drop);
estadoEmocionalRouter.put('/activate', authentification, estadoEmocionalController.activate);
estadoEmocionalRouter.get('/searchOne', estadoEmocionalController.getOne);
estadoEmocionalRouter.get('/searchAll', estadoEmocionalController.getAll);

export default estadoEmocionalRouter;
