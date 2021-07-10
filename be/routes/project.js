const router = require('express').Router()
const controller = require("../controllers/project");
const checkBodyIsEmpty = require('../middlewares/checkBodyIsEmpty')
const verifyToken = require('../middlewares/verifyToken')
const findUser = require('../middlewares/findUser')
const findProject = require('../middlewares/findProject')
const verifyIsAdmin = require('../middlewares/verifyIsAdmin')

router.get('/', controller.getAll)
router.post('/', verifyToken, findUser, verifyIsAdmin, checkBodyIsEmpty, controller.create)
router.get('/:id', findProject, controller.get)
router.put('/:id', verifyToken, findUser, verifyIsAdmin, checkBodyIsEmpty, findProject, controller.update)
router.delete('/:id', verifyToken, findUser, verifyIsAdmin, findProject, controller.delete)

module.exports = router