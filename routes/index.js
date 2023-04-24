const express = require('express')
const router = express.Router()

const buttonsRouter = require('./buttons')

router.use('/', buttonsRouter)

module.exports = router
