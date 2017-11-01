const rootRouter = require('express').Router()
const authRouter = require('./auth')
const profileRouter = require('./profile')

rootRouter.use('/auth', authRouter)
rootRouter.use('/profile', profileRouter)

module.exports = rootRouter