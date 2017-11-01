const profileController = require('../controllers/profile')
const profileRouter = require('express').Router()
const request = require("request");

profileRouter.route('/profile')
  .get(profileController.getUser)
  .patch(profileController.updateUser)

profileRouter.route('/profile/link')
  .post(profileController.linkUser)
  .delete(profileController.removeUserProvider)

module.exports = profileRouter
