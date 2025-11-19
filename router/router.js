import { Router } from "express";
import controller from "../container/container.js";

const router= Router()

router.get("/",controller.getAll)
// router.get("/:id",controller.getAll)
router.post("/",controller.getAll)
// router.put("/:id",controller.getAll)
// router.delete("/:id",controller.getAll)


export default router