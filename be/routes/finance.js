const router = require('express').Router()
const controller = require("../controllers/finance");
const checkBodyIsEmpty = require('../middlewares/checkBodyIsEmpty')
const verifyToken = require('../middlewares/verifyToken')
const verifyIsAdmin = require('../middlewares/verifyIsAdmin')
const findFinance = require('../middlewares/findFinance')
const findUser = require('../middlewares/findUser')

router.get('/', controller.getAll)
router.post('/', verifyToken, findUser, verifyIsAdmin, checkBodyIsEmpty, controller.save)
router.get('/:id', findFinance, controller.get)
router.delete('/:id', verifyToken, findUser, verifyIsAdmin, findFinance, controller.delete)

module.exports = router