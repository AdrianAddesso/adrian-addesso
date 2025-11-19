class Service {
    constructor(Dao) {
        this.Dao = Dao;
    }

    // GET /
    getAll = async () => {
        return await this.Dao.getAll();
    };

    // GET /:id
    getById = async (id) => {
        return await this.Dao.getById(id);
    };

    // POST /create
    create = async (data) => {
        return await this.Dao.create(data);
    };

    // PUT /:id
    update = async (id, data) => {
        return await this.Dao.update(id, data);
    };

    // DELETE /:id
    delete = async (id) => {
        return await this.Dao.delete(id);
    };
}

export default Service;
