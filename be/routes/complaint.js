const router = require('express').Router()
const controller = require("../controllers/complaints");
const checkBodyIsEmpty = require('../middlewares/checkBodyIsEmpty')
const verifyToken = require('../middlewares/verifyToken')
const findUser = require('../middlewares/findUser')
const findComplaint = require('../middlewares/findComplaint')
const verifyIsAdmin = require('../middlewares/verifyIsAdmin')
const follow_up = require('../controllers/follow_up')

router.get("/", controller.getAll);
router.post('/', verifyToken, checkBodyIsEmpty, findUser, controller.create)
router.get('/:id', findComplaint, controller.get)
router.put('/:id', verifyToken, checkBodyIsEmpty, findUser, findComplaint, controller.update)
router.delete('/:id', verifyToken, findUser, findComplaint, controller.delete)
router.put('/:id/follow_up', verifyToken, findUser, verifyIsAdmin, checkBodyIsEmpty, findComplaint, controller.follow_up, follow_up.create)

module.exports = router