import { Router } from "express";
import controller from "../container/container.js";
import { validarLargo, validarString, validarNumero } from "../middlewares/index.js";

const router= Router()

router.post(
  "/corredores",
  validarString("id"),
  validarLargo("id", 1, 6),
  validarNumero("latitud"),
  validarNumero("longitud"),
  controller.recibir
);
router.get("/", controller.getAll);

export default router