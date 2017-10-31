const rootRouter = require('express').Router()
const authRouter = require('./auth')

rootRouter.use('/auth', authRouter)

module.exports = rootRouter