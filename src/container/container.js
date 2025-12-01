import Dao from "../Dao/Dao.js"
import ServiceCorredores from "../service/ServiceCorredores.js"
import ControllerCorredores from "../controller/ControllerCorredores.js"

const dao= new Dao()
const service= new ServiceCorredores(dao)
const controller = new ControllerCorredores(service)

export default controller