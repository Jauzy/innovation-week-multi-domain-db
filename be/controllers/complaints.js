require('dotenv').config()
const db = require("../models");
const Complaint = db.complaint;
const User = db.user;
const UserInfo = db.user_info;
const FollowUp = db.follow_up;

const error = require('../helpers/errors')

const cleanObj = require('../helpers/cleanObj')

exports.create = (req, res) => {
    const complaint = {
        USER_ID: req.user.USER_ID,
        PARENT : req.body.parent,
        TITLE: req.body.title,
        CATEGORY: req.body.category,
        DETAIL : req.body.detail,
        STATUS : req.body.status,
        CREATE_DATE: new Date()
    }
    Complaint.create(complaint)
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            error(res, 500, err)
        });
}

exports.getAll = (req, res) => {
    Complaint.findAll({include:[{model: User, include: [UserInfo] }, {model:FollowUp, include: [{model: User, include: [UserInfo] }]}]})
        .then(datas => {
            res.send(datas)
        }).catch(err => {
            error(res, 400, err)
        });
}

exports.get = (req, res) => {
    res.send({message:'sukses get', data: req.complaint})
}

exports.update = async (req, res) => {
    let complaint = {
        TITLE: req.body.title,
        CATEGORY: req.body.category,
        DETAIL : req.body.detail,
        STATUS : req.body.status,
    }
    complaint = cleanObj(complaint)
    await req.complaint.update(complaint)
    res.send({message:'complaint updated!'})
}

exports.delete = async (req, res) => {
    await req.complaint.destroy()
    res.send({message:'complaint deleted'})
}

exports.follow_up = async (req, res, next) => {
    req.follow_up = {
        USER_ID: req.body.parent,
        COMPLAINT_ID : req.params.id
    }
    next()
    // res.send({message:'complaint followed up!'})
}