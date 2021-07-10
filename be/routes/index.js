
const router = require('express').Router()

router.use('/user', require('./user'))
router.use('/news', require('./news'))
router.use('/complaint', require('./complaint'))
router.use('/files', require('./files'))
router.use('/project', require('./project'))
router.use('/projdet', require('./project_detail'))
router.use('/finance', require('./finance'))

module.exports = router