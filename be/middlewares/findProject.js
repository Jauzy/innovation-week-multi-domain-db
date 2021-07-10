const db = require("../models");
const Project = db.project;
const User = db.user;
const UserInfo = db.user_info;

module.exports = (req, res, next) => {
    Project.findOne({
        where: {
            PROJECT_ID: req.params.id
        },
        include: [
            { model: User, include: [UserInfo] }
        ],
    }).then(data => {
        if (data) {
            req.project = data
            next()
        } else
        res.status(400).send({
            message: "Project not found"
        });
    }).catch(err => {
        res.status(500).send({
            message: "Project not found"
        });
    });
}