export default function errorHandler(err, req, res, next) {
    console.error("❌ Error:", err.message);

    // Detectar errores de JSON malformado
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
        status: "error",
        message: "JSON inválido: los valores numéricos deben ser números válidos",
        });
    }

    res.status(err.status || 500).json({
        status: "error",
        message: err.message || "Internal Server Error",
    });
}