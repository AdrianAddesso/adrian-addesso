class Controller {
    constructor(service) {
        this.service = service;
    }

    // GET /
    getAll = async (req, res) => {
        try {
        const data = await this.service.getAll();
        res.status(200).send(data);
        } catch (error) {
        res.status(400).send({ error: error.message });
        }
    };

    // GET /:id
    getById = async (req, res) => {
        try {
        const { id } = req.params;
        const data = await this.service.getById(id);

        if (!data) {
            return res.status(404).send({ error: "Item not found" });
        }

        res.status(200).send(data);
        } catch (error) {
        res.status(400).send({ error: error.message });
        }
    };

    // POST /create
    create = async (req, res) => {
        try {
        const { id, xa, ya, za } = req.body;

        const newItem = await this.service.create({ id, xa, ya, za });

        res.status(201).send(newItem);
        } catch (error) {
        res.status(400).send({ error: error.message });
        }
    };

    // PUT /:id
    update = async (req, res) => {
        try {
        const { id } = req.params;
        const body = req.body;

        const updated = await this.service.update(id, body);

        if (!updated) {
            return res.status(404).send({ error: "Item not found" });
        }

        res.status(200).send(updated);
        } catch (error) {
        res.status(400).send({ error: error.message });
        }
    };

    // DELETE /:id
    delete = async (req, res) => {
        try {
        const { id } = req.params;

        const deleted = await this.service.delete(id);

        if (!deleted) {
            return res.status(404).send({ error: "Item not found" });
        }

        res.status(200).send({ message: "Item deleted" });
        } catch (error) {
        res.status(400).send({ error: error.message });
        }
    };
}

export default Controller;
