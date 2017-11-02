const rootRouter = require('express').Router()
const authRouter = require('./auth')
const auth0Router = require('./auth0')
const profileRouter = require('./profile')

rootRouter.use('/auth', authRouter)
rootRouter.use('/auth0', auth0Router)
rootRouter.use('/profile', profileRouter)

module.exports = rootRouter