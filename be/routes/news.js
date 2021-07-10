const router = require('express').Router()
const controller = require("../controllers/news.js");
const checkBodyIsEmpty = require('../middlewares/checkBodyIsEmpty')
const verifyToken = require('../middlewares/verifyToken')
const findUser = require('../middlewares/findUser')
const findNews = require('../middlewares/findNews')
const verifyIsAdmin = require('../middlewares/verifyIsAdmin')

router.get("/", controller.getAll);
router.post("/",  verifyToken, checkBodyIsEmpty, findUser, verifyIsAdmin, controller.create);
router.get('/:id', findNews, controller.get)
router.put('/:id', verifyToken, findUser, checkBodyIsEmpty, findNews, verifyIsAdmin, controller.update)
router.delete('/:id', verifyToken, findUser, findNews, verifyIsAdmin, controller.delete)

module.exports = router