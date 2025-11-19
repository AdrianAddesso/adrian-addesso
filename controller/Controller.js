class Controller {
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

  create = async (req, res) => {
    try {
      const { id, xa, ya, za } = req.body;
      const data = this.service.create( {id,  xa, ya, za });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
}

export default Controller;
