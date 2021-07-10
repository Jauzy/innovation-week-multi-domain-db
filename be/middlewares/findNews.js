const db = require("../models");
const News = db.news;
const User = db.user;
const UserInfo = db.user_info;

module.exports = (req, res, next) => {
    News.findOne({
        where: {
            NEWS_ID: req.params.id
        },
        include: [
            { model: User, include: [UserInfo] }
        ],
    }).then(data => {
        if (data) {
            req.news = data
            next()
        } else
        res.status(400).send({
            message: "News not found"
        });
    }).catch(err => {
        res.status(500).send({
            message: "News not found"
        });
    });
}