class Dao {
    constructor() {
        this.data = [
            {
                id: "A1",
                latitud: -34.6037,
                longitud: -58.3816,
            },
            {
                id: "A2",
                latitud: -34.60365,
                longitud: -58.38152,
            },
            {
                id: "A3",
                latitud: -34.60376,
                longitud: -58.3817,
            },
        ];
    }

    getAll = async () => {
        return this.data;
    };
    // POST /corredores
    recibir = async (item) => {
        this.data.push(item);
        return item;
    };

    getById = async (id) => {
        return this.data.find((item) => item.id === id);
    };

    actualizar = async (id, newData) => {
        const index = this.data.findIndex((item) => item.id === id);

        if (index === -1) {
        return null;
        }

        this.data[index] = {
        ...this.data[index],
        ...newData,
        };

        return this.data[index];
    };
}

export default Dao;