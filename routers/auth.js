const authController = require('../controllers/auth')
const authRouter = require('express').Router()

authRouter.route('/signup')
    .post(authController.signup)

authRouter.route('/searchPersonApi')
    .post(authController.searchPersonApi)

authRouter.route('/users')
    .get(authController.getUsers)

module.exports = authRouter
