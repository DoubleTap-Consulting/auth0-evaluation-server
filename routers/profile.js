const profileController = require('../controllers/profile')
const profileRouter = require('express').Router()
const request = require("request");

profileRouter.route('/:userid')
  .get(profileController.getUser)
  .patch(profileController.updateUser)

profileRouter.route('/link/:userid')
  .post(profileController.linkUser)
  .delete(profileController.unlinkUser)

profileRouter.route('/link/:userid/potential')
  .get(profileController.checkPotentialAccountsToLink)

profileRouter.route('/favorites/:userid')
  .post(profileController.addFavorite)
  .delete(profileController.removeFavorite)

module.exports = profileRouter
