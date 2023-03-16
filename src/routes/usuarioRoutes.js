import { Router } from "express";
import * as usuarioController from "../controllers/usuario_controller.js";
import { authentification, authorization } from "../middlewares/authorize.js";
import { validaCamposUsuario } from "../validators/validate_usuario.js";
import { validateReutilizable } from "../validators/validate_reutilizable.js";

const usuarioRouter = Router();

usuarioRouter.post('/add', validaCamposUsuario, validateReutilizable, usuarioController.post);
usuarioRouter.put('/update', authentification, usuarioController.put);
usuarioRouter.delete('/delete', authorization, authentification,  usuarioController.drop);
usuarioRouter.get('/searchOne', authorization, authentification,  usuarioController.getOne);
usuarioRouter.get('/searchAll', usuarioController.getAll);
usuarioRouter.post('/login', usuarioController.login);
export default usuarioRouter;
