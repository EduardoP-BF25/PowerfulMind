import { Router } from "express";
import * as publicacionController from "../controllers/publicacion_controller.js";
import { authentification, authorization } from "../middlewares/authorize.js";
import { validateReutilizable } from "../validators/validate_reutilizable.js";

const publicacionRouter = Router();

publicacionRouter.post('/add', validateReutilizable, publicacionController.post);
publicacionRouter.put('/update', authentification, publicacionController.put);
publicacionRouter.delete('/delete', authentification, authorization, publicacionController.drop);
publicacionRouter.get('/searchOne', publicacionController.getOne);
publicacionRouter.get('/searchAll', publicacionController.getAll);

export default publicacionRouter;
