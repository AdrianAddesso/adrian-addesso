export default function validarLargo(field, min, max) {
    return (req, res, next) => {
        const value = req.body[field] || req.params[field] || req.query[field];

        if (value === undefined) {
        return res
            .status(400)
            .json({ error: `${field} es requerido para la validacion` });
        }

        if (value.length < min || value.length > max) {
        return res.status(400).json({
            error: `El ID del corredor debe tener entre ${min} y ${max} caracteres`,
        });
        }

        next();
    };
}
