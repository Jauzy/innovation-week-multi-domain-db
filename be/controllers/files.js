require('dotenv').config()
const db = require("../models");
const File = db.file;
const error = require('../helpers/errors')
const path = require('path')

const cleanObj = require('../helpers/cleanObj')

exports.create = async (req, res, next) => {
    await req.file_info.update({
        FILE_NAME: req.file_info.REFERENCE + '-' + req.file_info.FILE_ID,
        TYPE: path.extname(req.file.originalname),
        PATH: `${req.hostname}:8001/${req.file.path}`
    })
    res.send(req.file_info)
}

exports.get = (req, res) => {
    res.send(req.file_info)
}

exports.getAll = (req, res) => {
    File.findAll()
        .then(datas => {
            res.send(datas)
        }).catch(err => {
            error(res)
        });
}

exports.getByRef = (req, res) => {
    File.findAll({
        where: {
            REFERENCE: req.body.ref,
            PARENT: req.body.parent
        }
    }).then(data => {
        res.send(data)
    })
}

exports.delete = async (req, res) => {
    await req.file_info.destroy()
    res.send({message:'file deleted'})
}