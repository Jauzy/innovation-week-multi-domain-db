require('dotenv').config()
const db = require("../models");
const Project = db.project
const ProjectDetail = db.project_detail
const User = db.user;
const UserInfo = db.user_info;
const error = require('../helpers/errors')

const cleanObj = require('../helpers/cleanObj')

exports.create = (req, res) => {
    const project_detail = {
        PROJECT_ID: req.project.PROJECT_ID,
        PROJCOMP_NAME: req.body.title,
        PROGRESS: 0,
        STATUS: req.body.status,
        CREATE_DATE: new Date()
    }
    ProjectDetail.create(project_detail)
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            error(res, 500, err)
        });
}

exports.get = (req, res) => {
    res.send({message:'sukses get', data: req.project_detail})
}

exports.getAll = (req, res) => {
    ProjectDetail.findAll({include:[{model: Project}]})
        .then(datas => {
            res.send(datas)
        }).catch(err => {
            error(res, 400, err)
        });
}

exports.update = async (req, res) => {
    let project_detail = {
        PROJCOMP_NAME: req.body.title,
        PROGRESS: req.body.progress,
        STATUS: req.body.status,
    }
    project_detail = cleanObj(project_detail)
    await req.project_detail.update(project_detail)
    res.send({message:'project detail updated!'})
}

exports.delete = async (req, res) => {
    await req.project_detail.destroy()
    res.send({message:'project detail deleted'})
}