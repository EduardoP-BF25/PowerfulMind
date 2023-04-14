import app from "./app.js";
import { sequelize } from "./config/db.js";
import { PROYECT } from "./utils/env.js";
import { PORT } from "./utils/env.js";

import { Cita } from "./models/cita.js";
import { Usuario } from "./models/usuario.js";
import { Publicacion } from "./models/publicacion.js";
import { Paciente } from "./models/paciente.js";
import { EstadoEmocional } from "./models/estadoEmocional.js";
import { Especialidad } from "./models/especialidad.js";


// const PORT = process.env.PORT || 4001;

async function proyect() {
    try {
        // sequelize.sync({force: true})
        app.listen(PORT, () => {
            console.log(`Bienvenido a ${PROYECT}`);
        });
    } catch (err) {
        console.log(err);
    }
}

proyect();