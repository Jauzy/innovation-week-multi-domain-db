require('dotenv').config()
const db = require("../models");
const Finance = db.finance
const ProjectDetail = db.project_detail
const Project = db.project
const error = require('../helpers/errors')

const cleanObj = require('../helpers/cleanObj')

exports.save = (req, res) => {
    Finance.findOne({
        where: {
            PARENT: req.body.parent,
            IS_GENERAL: req.body.is_general
        }
    }).then(async data => {
        if (data) {
            let finance = {
                AMOUNT: req.body.amount,
                DESCRIPTION: req.body.description,
            }
            finance = cleanObj(finance)
            await data.update(finance)
            res.send({ message: 'finance updated!' })
        } else {
            const finance = {
                PARENT: req.body.parent,
                AMOUNT: req.body.amount,
                DESCRIPTION: req.body.description,
                IS_GENERAL: req.body.is_general,
                CREATE_DATE: new Date()
            }
            if (req.body.is_general == '1') {
                Project.findOne({
                    where: {
                        PROJECT_ID: req.body.parent
                    }
                }).then(data => {
                    if (data) {
                        Finance.create(finance)
                            .then(data => {
                                res.send({ data });
                            })
                            .catch(err => {
                                error(res, 500, err)
                            });
                    } else error(res, 400, {message:'Not found!'})
                })
            } else {
                ProjectDetail.findOne({
                    where: {
                        PROJDET_ID: req.body.parent
                    }
                }).then(data => {
                    if (data) {
                        Finance.create(finance)
                            .then(data => {
                                res.send({ data });
                            })
                            .catch(err => {
                                error(res, 500, err)
                            });
                    } else error(res, 400, {message:'Not found!'})
                })
            }
        }
    })
}

exports.get = (req, res) => {
    if (req.finance.IS_GENERAL == '1') {
        Project.findOne({
            where: {
                PROJECT_ID: req.finance.PARENT
            }
        }).then(data => {
            res.send({ message: 'sukses get', finance: req.finance, parent: data })
        })
    } else {
        ProjectDetail.findOne({
            where: {
                PROJDET_ID: req.finance.PARENT
            }
        }).then(data => {
            res.send({ message: 'sukses get', finance: req.finance, parent: data })
        })
    }
}

exports.getAll = (req, res) => {
    Finance.findAll()
        .then(datas => {
            res.send(datas)
        }).catch(err => {
            error(res, 400, err)
        });
}

exports.delete = async (req, res) => {
    await req.finance.destroy()
    res.send({ message: 'finance deleted' })
}