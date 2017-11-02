const auth0Controller = require('../controllers/auth0')
const auth0Router = require('express').Router()

auth0Router.route('/connection')
  .post(auth0Controller.createConnection)

module.exports = auth0Router
