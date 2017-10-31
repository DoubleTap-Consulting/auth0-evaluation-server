const authRouter = require('express').Router()
const authController = require('../controllers/auth')

nutritionRouter.route('/auth/login')
    .post(authController.login)

module.exports = authRouter