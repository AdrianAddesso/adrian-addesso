export default function validarString(field) {
  return (req, res, next) => {
    const value = req.body[field];

    if (typeof value !== "string" || value.trim() === "") {
      return res.status(422).json({ error: "El ID del corredor debe ser un string" });
    }

    next();
  };
}