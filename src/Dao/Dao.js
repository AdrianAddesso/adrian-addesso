class Dao {
  constructor() {
    // Datos de ejemplo en memoria
    this.data = [
      // {
      //   id: "AAB001",
      //   xa: 7500,
      //   ya: 6200,
      //   za: 1000,
      // },
    ];
  }

  // GET all
  getAll = async () => {
    return this.data;
  };

  // GET by ID
  getById = async (id) => {
    return this.data.find((item) => item.id === id);
  };

  // POST /create
  create = async (item) => {
    this.data.push(item);
    return item;
  };

  // PUT /:id
  update = async (id, newData) => {
    const index = this.data.findIndex((item) => item.id === id);

    if (index === -1) {
      return null; // not found → controller envia 404
    }

    this.data[index] = {
      ...this.data[index],
      ...newData,
    };

    return this.data[index];
  };

  // DELETE /:id
  delete = async (id) => {
    const index = this.data.findIndex((item) => item.id === id);

    if (index === -1) {
      return null; // controller envia 404
    }

    const deleted = this.data[index];
    this.data.splice(index, 1);

    return deleted;
  };
}

export default Dao;