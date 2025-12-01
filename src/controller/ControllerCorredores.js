
import { checkDistancia } from "../service/ServiceGPU.js";

class ControllerCorredores {
    constructor(service) {
        this.service = service;
    }

    getAll = async (req, res) => {
        try {
        const data = await this.service.getAll();
        res.status(200).send(data);
        } catch (error) {
        res.status(400).send({ error: error.message });
        }
    };

recibir = async (req, res) => {
    try {
        const { id, latitud, longitud } = req.body;

        // Verificar si existe
        const existe = await this.service.getById(id);

        // Verificar cercanía
        const alerta = await checkDistancia(this.service, latitud, longitud);
        let response = {};

        if (existe) {
            // Actualizar
            const updated = await this.service.actualizar(id, { latitud, longitud });
            console.log(`Corredor ${id} actualizado.`);
            response = {
                message: `El corredor ${id} fue actualizado`,
                data: updated
            };

        } else {
            // Crear nuevo
            const newItem = await this.service.recibir({ id, latitud, longitud });
            console.log(`Corredor ${id} creado.`);
            response = {
                message: `El corredor ${id} fue creado`,
                data: newItem
            };
            
        }

        // Si hay corredores cercanos, agregar alerta
        if (alerta.length > 0) {
            response.alerta = `Corredores cercanos dentro de 50 metros: ${alerta.join(", ")}`;
        }

        const statusCode = existe ? 200 : 201;
        return res.status(statusCode).send(response);

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
    };
}
export default ControllerCorredores;
