const profileController = require('../controllers/profile')
const profileRouter = require('express').Router()
const request = require("request");

profileRouter.route('/auth/login')
  .post(profileController.login)

profileRouter.route('/auth/suggestedUsers')
  .get(profileController.suggestedUsers)

module.exports = profileRouter
