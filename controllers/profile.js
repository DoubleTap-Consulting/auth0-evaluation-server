const profileController = {}
const request = require('request')

// Returns a single user
profileController.getUser = (req, res) => {
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
    if (error || body.error) {
      res.status(400).send({ message: body.message, status: body.statusCode })
    } else {
      res.status(200).send({ message: "success", status: 200, user: body })
    }
  });
}

// Available properties to update include:
// blocked
// email_verified
// email
// verify_email
// password --> can't update email and password simultaniously
// phone_number --> must be an 'sms' user to add a phone number??
// phone_verified
// verify_password
// user_metadata --> this is an object we can store any properties we'd like. Obj merged only first lvl down
// app_metadata
// username --> cannot set username without "requires_username"
profileController.updateUser = (req, res) => {
  var options = {
    method: 'PATCH',
    url: `https://doubletap-consulting.auth0.com/api/v2/users/${req.params.userid}`,
    headers: {
      authorization: process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    json: true,
    body: req.body
  };

  request(options, (error, response, body) => {
    if (error || body.error) {
      res.status(400).send({ message: body.message, status: body.statusCode })
    } else {
      res.status(200).send({ message: "success", status: 200, user: body })
    }
  });
}

// Links two user accounts
profileController.linkUser = (req, res) => {
  const options = {
    method: 'POST',
    url: `https://doubletap-consulting.auth0.com/api/v2/users/${req.params.userid}/identities`,
    headers: {
      authorization: process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    body: {
      "provider": req.body.secondaryProvider,
      "user_id": req.body.secondaryUserid
    },
    json: true
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    if (error || body.error) {
      res.status(400).send({ message: body.message, status: body.statusCode })
    } else {
      res.status(200).send({ message: "success", status: 200, user: body })
    }
  });
}

// Unlinks two user accounts
profileController.unlinkUser = (req, res) => {
  const options = {
    method: 'DELETE',
    url: `https://doubletap-consulting.auth0.com/api/v2/users/${req.params.userid}/identities/${req.body.secondaryProvider}/${req.body.secondaryUserid}`,
    headers: {
      authorization: process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    json: true
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    if (error || body.error) {
      res.status(400).send({ message: body.message, status: body.statusCode })
    } else {
      res.status(200).send({ message: "success", status: 200, user: body })
    }
  });
}

module.exports = profileController
