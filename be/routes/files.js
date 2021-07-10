const router = require('express').Router()
const controller = require("../controllers/files");
const checkBodyIsEmpty = require('../middlewares/checkBodyIsEmpty')
const verifyToken = require('../middlewares/verifyToken')
const findUser = require('../middlewares/findUser')
const findFile = require('../middlewares/findFile')
const upload = require('../config/multer.config')

router.get('/', verifyToken, findUser, controller.getAll)
router.post('/ref', verifyToken, findUser, checkBodyIsEmpty, controller.getByRef)
router.post('/:ref/:parent', verifyToken, findUser, checkBodyIsEmpty, findFile, upload.single('file'), controller.create)
router.get('/:id', verifyToken, findUser, findFile, controller.get)
router.delete('/:id', verifyToken, findUser, findFile, controller.delete)

module.exports = router