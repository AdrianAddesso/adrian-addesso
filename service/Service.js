class Service{
     constructor(Dao){
          this.Dao=Dao
     }

     getAll=async()=>{
          return await this.Dao.getAll()
     }

     cretae=async(data)=>{
          return await this.Dao.create(data)
     }
}

export default Service