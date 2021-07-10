module.exports = (req, res, next) => {
    if(req.user.user.TYPE != 'W') next()
    else {
        res.status(401).send({ message: "Not Authorized" })
    }
}