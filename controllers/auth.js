const authController = {}
const fullcontact = require("fullcontact-api")(process.env.PERSON_API_KEY);
const request = require('request')

// Signup route
authController.signup = (req, res) => {
  var options = {
    method: 'POST',
    url: 'https://doubletap-consulting.auth0.com/api/v2/users',
    headers: {
      'Authorization': process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    body: {
      user_id: "",
      connection: process.env.AUTH0_CLIENT_ID,
      email: "john.doe@gmail.com",
      username: "johndoe",
      password: "secret",
      phone_number: "+199999999999999",
      user_metadata: {},
      email_verified: false,
      verify_email: false,
      phone_verified: false,
      app_metadata: {}
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.status(200).send({
      data: body
    })
  });
}

// Returns a list of all users
authController.getUsers = (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://doubletap-consulting.auth0.com/api/v2/users',
    headers: {
      'Authorization': process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    res.status(200).send({
      data: body
    })
  });
}

// Returns any data stored within the Person API
authController.searchPersonApi = (req, res) => {
  fullcontact.person.findByEmail(req.body.email, function (err, json) {
    if (err) throw new Error(err);
    res.status(200).send({ message: "success", status: 200, user: json })
  });
}

module.exports = authController
