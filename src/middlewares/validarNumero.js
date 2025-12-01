export default function validarNumero(num) {
  return (req, res, next) => {
    const value = req.body[num]

    if (!value) {
      return res.status(400).json({ error: `Coordenada ingresada no valida` });
    }

    if (isNaN(value)) {
      return res
        .status(400)
        .json({ error: `Las coordenadas deben ser numericas` });
    }

    next();
  };
}
