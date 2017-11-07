const authController = {}
const fullcontact = require("fullcontact-api")(process.env.PERSON_API_KEY);
const request = require('request-promise')
const fbgraph = require('fbgraphapi');

// Signup route
// ****** UNUSED ********
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
    if (error || body.error) {
      res.status(400).send({ message: body.message, status: body.statusCode })
    } else {
      res.status(200).send({ message: "success", status: 200, users: body })
    }
  });
}

// Returns any data stored within the Person API
authController.searchPersonApi = (req, res) => {
  fullcontact.person.findByEmail(req.body.email, function (err, json) {
    if (err) {
      res.status(400).send({ err, message: "failed to find by email", status: 400 })
    }

    var updateOptions = {
      method: 'PATCH',
      url: `https://doubletap-consulting.auth0.com/api/v2/users/${req.params.userid}`,
      headers: {
        authorization: process.env.AUTH0_AUTHORIZATION,
        'content-type': 'application/json'
      },
      json: true,
      body: {
        user_metadata: {
          person_api: json
        }
      }
    };

    request(updateOptions, (updateError, updateResponse, updateBody) => {
      if (updateError || updateBody.error) {
        res.status(400).send({ message: updateBody.message, status: updateBody.statusCode })
      } else {
        res.status(200).send({ message: "success", status: 200, user: updateBody })
      }
    });
  });
}

authController.searchGraphApi = (req, res) => {
  var options = {
    method: 'GET',
    url: `https://doubletap-consulting.auth0.com/api/v2/users/${req.params.userid}`,
    headers: {
      'Authorization': process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    json: true
  };

  request(options, (error, response, body) => {
    let access_token = body.identities[1].access_token
    var fb = new fbgraph.Facebook(access_token, 'v2.2');
    fb.me(function (err, me) {
      if (err) {
        console.log('err in fb.me', err)
        res.status(400).send({ err, message: "failed to find", status: 400 })
      }
      console.log('me', me)

      var updateOptions = {
        method: 'PATCH',
        url: `https://doubletap-consulting.auth0.com/api/v2/users/${req.params.userid}`,
        headers: {
          authorization: process.env.AUTH0_AUTHORIZATION,
          'content-type': 'application/json'
        },
        json: true,
        body: {
          user_metadata: {
            facebook_graph: me
          }
        }
      };

      request(updateOptions, (updateError, updateResponse, updateBody) => {
        if (updateError || updateBody.error) {
          res.status(400).send({ message: updateBody.message, status: updateBody.statusCode })
        } else {
          res.status(200).send({ message: "success", status: 200, user: updateBody })
        }
      });
    });
  });

}

module.exports = authController
