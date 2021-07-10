const db = require("../models");
const Finance = db.finance;

module.exports = (req, res, next) => {
    Finance.findOne({
        where: {
            FINANCE_ID: req.params.id
        }
    }).then(data => {
        if (data) {
            req.finance = data
            next()
        } else
        res.status(400).send({
            message: "Finance not found"
        });
    }).catch(err => {
        res.status(500).send({
            message: "Finance not found"
        });
    });
}