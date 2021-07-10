module.exports = (res, code, err) => {
    res.status(code || 400).send({
        message:
            err?.message || "Some error occurred while requesting."
    });
}