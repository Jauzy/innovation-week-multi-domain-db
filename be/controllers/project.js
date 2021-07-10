require('dotenv').config()
const db = require("../models");
const Project = db.project
const ProjectDetail = db.project_detail
const User = db.user;
const UserInfo = db.user_info;
const error = require('../helpers/errors')

const cleanObj = require('../helpers/cleanObj')

exports.create = (req, res) => {
    const project = {
        USER_ID: req.user.USER_ID,
        TITLE: req.body.title,
        DESCRIPTION: req.body.description,
        LOCATION: JSON.stringify(req.body.location),
        STATUS: req.body.status,
        CREATE_DATE: new Date()
    }
    Project.create(project)
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            error(res, 500, err)
        });
}

exports.get = (req, res) => {
    res.send({message:'sukses get', data: req.project})
}

exports.getAll = (req, res) => {
    Project.findAll({include:[{model: User, include: [UserInfo] },{model: ProjectDetail }]})
        .then(datas => {
            res.send(datas)
        }).catch(err => {
            error(res, 400, err)
        });
}

exports.update = async (req, res) => {
    let project = {
        USER_ID: req.user.USER_ID,
        TITLE: req.body.title,
        DESCRIPTION: req.body.description,
        LOCATION: JSON.stringify(req.body.location),
        STATUS: req.body.status,
    }
    project = cleanObj(project)
    await req.project.update(project)
    res.send({message:'project updated!'})
}

exports.delete = async (req, res) => {
    await req.project.destroy()
    res.send({message:'project deleted'})
}