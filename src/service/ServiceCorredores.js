class ServiceCorredores {
    constructor(Dao) {
        this.Dao = Dao;
    }

    getAll = async () => {
        return await this.Dao.getAll();
    };

    // GET /:id - Buscar corredor por ID
    getById = async (id) => {
        return await this.Dao.getById(id);
    };

    // POST /corredores - Recibir/crear corredor
    recibir = async (data) => {
        return await this.Dao.recibir(data);
    };

    // Actualizar coordenadas de corredor existente
    actualizar = async (id, data) => {
        return await this.Dao.actualizar(id, data);
    };
}

export default ServiceCorredores;
