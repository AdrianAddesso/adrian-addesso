function validateString(field) {
    return (req, res, next) => {
        const value = req.body[field] || req.params[field] || req.query[field];

        if (value === undefined) {
        return res.status(400).json({ error: `${field} is required` });
        }

        if (typeof value !== "string") {
        return res.status(400).json({ error: `${field} must be a string` });
        }

        next();
    };
}

export default validateString;