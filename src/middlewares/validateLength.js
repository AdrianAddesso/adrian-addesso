function validateLength(field, min, max) {
    return (req, res, next) => {
        const value = req.body[field] || req.params[field] || req.query[field];

        if (value === undefined) {
        return res.status(400).json({ error: `${field} is required` });
        }

        if (value.length < min || value.length > max) {
        return res.status(400).json({
            error: `${field} must be between ${min} and ${max} characters`,
        });
        }

        next();
    };
}

export default validateLength;