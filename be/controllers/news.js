require('dotenv').config()
const db = require("../models");
const News = db.news;
const User = db.user;
const UserInfo = db.user_info;
const error = require('../helpers/errors')

const cleanObj = require('../helpers/cleanObj')

exports.create = (req, res) => {
    const news = {
        USER_ID: req.user.USER_ID,
        TITLE: req.body.title,
        DESCRIPTION: req.body.description,
        CATEGORY: req.body.category,
        CREATE_DATE: new Date()
    }
    News.create(news)
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            error(res, 500, err)
        });
}

exports.getAll = (req, res) => {
    News.findAll({include:[{model: User, include: [UserInfo] }]})
        .then(datas => {
            res.send(datas)
        }).catch(err => {
            error(res)
        });
}

exports.get = (req, res) => {
    res.send({message:'sukses get', data: req.news})
}

exports.update = async (req, res) => {
    let news = {
        TITLE : req.body.title,
        DESCRIPTION: req.body.description,
        CATEGORY : req.body.category
    }
    news = cleanObj(news)
    await req.news.update(news)
    res.send({message:'news updated!'})
}

exports.delete = async (req, res) => {
    await req.news.destroy()
    res.send({message:'news deleted'})
}