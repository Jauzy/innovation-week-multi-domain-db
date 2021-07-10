const db = require("../models");
const File = db.file;

module.exports = (req, res, next) => {
    File.findOne({
        where: {
            FILE_ID: req.params.id || null
        }
    }).then(data => {
        if (data) {
            req.file_info = data
            next()
        } else if(!req.params.id){
            File.create({
                PARENT: req.params.parent,
                REFERENCE: req.params.ref,
                CREATE_DATE: new Date()
            }).then(data => {
                req.file_info = data
                next()
            })
        } else
        res.status(400).send({
            message: "File not found"
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
}