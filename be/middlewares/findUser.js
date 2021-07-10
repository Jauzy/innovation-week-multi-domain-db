const db = require("../models");
const UserInfo = db.user_info;
const User = db.user;

module.exports = (req, res, next) => {
    UserInfo.findOne({
        where: {
            USER_ID: req.user.uid
        },
        include: [
            User
        ],
    }).then(data => {
        req.user = data
        next()
    }).catch(err => {
        res.status(500).send({
            message: "User not found"
        });
    });
}