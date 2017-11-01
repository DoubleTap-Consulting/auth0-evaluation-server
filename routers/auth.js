const authController = require('../controllers/auth')
const authRouter = require('express').Router()
const request = require("request");

authRouter.route('/auth/login')
    .post(authController.login)

authRouter.route('/auth/suggestedUsers')
    .get(authController.suggestedUsers)

module.exports = authRouter
