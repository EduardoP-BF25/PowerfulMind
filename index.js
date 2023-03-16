import app from "./app.js";
import { sequelize } from "./src/config/db.js";

// import { Paciente } from "./models/paciente.js";

import { Cita } from "./src/models/cita.js";
import { Usuario } from "./src/models/usuario.js";
import { Publicacion } from "./src/models/publicacion.js";
import { Paciente } from "./src/models/paciente.js";

const PORT = process.env.PORT || 4001;

async function proyect() {
    try {
        sequelize.sync({force: true})
        app.listen(PORT, () => {
            console.log("Bienvenido");
        });
    } catch (err) {
        console.log(err);
    }
}

proyect();
