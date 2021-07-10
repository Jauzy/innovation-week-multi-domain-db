require("dotenv").config()
const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.token?.split(" ")
        if (token?.[0] == "BEARER") {
            jwt.verify(token[1], process.env.SECRETKEY || 'SIPANDA', function (err, decoded) {
                if (err) console.log(err)
                else {
                    req.user = {
                        email: decoded.email,
                        uid: decoded.uid,
                    }
                    next()
                }
            });
        } else {
            res.status(400).send({ message: "Invalid Token" })
        }
    } catch(err) {
        res.status(400).send({ message: err.message })
    }
}

module.exports = verifyToken