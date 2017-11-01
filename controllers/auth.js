const authController = {}
const fullcontact = require("fullcontact-api")(process.env.PERSON_API_KEY);

authController.login = (req, res) => {
  res.status(200).send({
    message: 'Success'
  })
}

authController.suggestedUsers = (req, res) => {
  let suggestedUsers = [];
  Auth0Client.getUsersWithSameVerifiedEmail(req.user._json)
    .then(identities => {
      suggestedUsers = identities;
    }).catch(err => {
      console.log('There was an error retrieving users with the same verified email to suggest linking', err);
    }).then(() => {
      res.send(suggestedUsers);
    });
}

authController.gatherPersonApiInfo = (req, res) => {
  fullcontact.person.findByEmail("email", function (err, json) {
    //json now contains your information unless err 
  });
}

module.exports = authController


// var options = { 
//   method: 'GET',
//   url: 'https://doubletap-consulting.auth0.com/api/v2/clients',
//   headers: 
//    { authorization: process.env.AUTH0_AUTHORIZATION,
//      'content-type': 'application/json' 
//    }
// };

// request(options, (error, response, body) => {
//   if (error) throw new Error(error);

//   console.log(body);
// });



// automates getting new valid token
// var options = { method: 'POST',
//   url: 'https://doubletap-consulting.auth0.com/oauth/token',
//   headers: { 'content-type': 'application/json' },
//   body: 
//    { grant_type: 'client_credentials',
//      client_id: 'kiTTYpqgwQktmJpY_-FY3jKI4eZ1snr0',
//      client_secret: 'Y8HcWvxkWZES3MOG1PJcvvB7KkgJIY_tHU0O1wiBe-4m6ZInLkfZbPDydIOcNhZT',
//      audience: 'https://doubletap-consulting.auth0.com/api/v2/' },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });