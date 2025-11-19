function validateNumber(field) {
    return (req, res, next) => {
        const value = req.body[field] || req.params[field] || req.query[field];

        if (value === undefined) {
        return res.status(400).json({ error: `${field} is required` });
        }

        if (isNaN(value)) {
        return res.status(400).json({ error: `${field} must be a number` });
        }

        next();
    };
}
export default validateNumber;