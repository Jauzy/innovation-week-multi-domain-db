const router = require('express').Router()
const controller = require("../controllers/project_detail");
const checkBodyIsEmpty = require('../middlewares/checkBodyIsEmpty')
const verifyToken = require('../middlewares/verifyToken')
const findUser = require('../middlewares/findUser')
const findProjectDetail = require('../middlewares/findProjectDetail')
const findProject = require('../middlewares/findProject')
const verifyIsAdmin = require('../middlewares/verifyIsAdmin')

router.get('/', controller.getAll)
router.post('/:id', verifyToken, findUser, verifyIsAdmin, checkBodyIsEmpty, findProject, controller.create)
router.get('/:id', findProjectDetail, controller.get)
router.put('/:id', verifyToken, findUser, verifyIsAdmin, checkBodyIsEmpty, findProjectDetail, controller.update)
router.delete('/:id', verifyToken, findUser, verifyIsAdmin, findProjectDetail, controller.delete)

module.exports = router