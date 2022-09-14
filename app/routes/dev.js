const controlller = require('../controllers/dev')
const router = require('express').Router()

router.get('/version', controlller.version)

module.exports = router
