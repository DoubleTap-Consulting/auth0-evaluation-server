const authController = require('../controllers/auth')
const authRouter = require('express').Router()

authRouter.route('/signup')
    .post(authController.signup)

authRouter.route('/searchPersonApi/:userid')
    .post(authController.searchPersonApi)

authRouter.route('/users')
    .get(authController.getUsers)

authRouter.route('/searchGraphApi/:userid')
    .post(authController.searchGraphApi)

module.exports = authRouter
