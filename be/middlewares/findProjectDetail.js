const db = require("../models");
const ProjectDetail = db.project_detail;
const Project = db.project;

module.exports = (req, res, next) => {
    ProjectDetail.findOne({
        where: {
            PROJDET_ID: req.params.id
        },
        include: [
            Project
        ],
    }).then(data => {
        if (data) {
            req.project_detail = data
            next()
        } else
        res.status(400).send({
            message: "Project Detail not found"
        });
    }).catch(err => {
        res.status(500).send({
            message: "Project Detail not found"
        });
    });
}