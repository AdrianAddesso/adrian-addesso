class Dao {
  data = [
    {
      id: "AAB001",
      xa: 7500,
      ya: 6200,
      za: 1000,
    },
  ];

  getAll = async () => {
    return this.data;
  };

  create=async(data)=>{
     this.data.push(data)
  }
}

export default Dao;
