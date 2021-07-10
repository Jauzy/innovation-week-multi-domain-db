const router = require('express').Router()
const controller = require("../controllers/user.js");
const checkBodyIsEmpty = require('../middlewares/checkBodyIsEmpty')
const verifyToken = require('../middlewares/verifyToken')
const findUser = require('../middlewares/findUser')

router.get('/all', controller.getAll)

router.get("/", verifyToken, findUser, controller.getData);
router.post("/", checkBodyIsEmpty, controller.register);
router.put("/", verifyToken, findUser, checkBodyIsEmpty, controller.update);
router.put("/password", verifyToken, findUser, checkBodyIsEmpty, controller.updatePassword);
router.post("/login", checkBodyIsEmpty, controller.login);

module.exports = router