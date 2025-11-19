import { Router } from "express";
import controller from "../container/container.js";
import {validateNumber} from "../middlewares/index.js";
//Todos los middlewares
//import {validateNumber, validateString,validateLength,} from "../middleware/index.js";

const router= Router()

router.get("/",controller.getAll)
router.get("/:id",validateNumber("id"),controller.getById)
router.post("/create",controller.create)
router.put("/:id",validateNumber("id"),controller.update)
router.delete("/:id",validateNumber("id"),controller.delete)


export default router