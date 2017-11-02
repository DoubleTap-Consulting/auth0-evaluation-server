const request = require('request')

// automates getting new valid token
// var grantOptions = {
//   method: 'POST',
//   url: 'https://doubletap-consulting.auth0.com/api/v2/client-grants',
//   headers: {
//     'Authorization': process.env.AUTH0_AUTHORIZATION,
//     'content-type': 'application/json'
//   },
//   body: {
//     client_id: "auth0_eval_api",
//     audience: 'auth0_eval_api',
//     scope: [
//       "Sample Scope"
//     ]
//   },
//   json: true
// };
// request(grantOptions, function (error, response, body) {
//   if (error) throw new Error(error);
//   console.log('body1', body);
//   process.env.AUTH0_AUTH_TOKEN = 'hithere'
//   console.log('authtoken', process.env.AUTH0_AUTH_TOKEN)

// automates getting new valid token
// console.log('running get token')
// var tokenOptions = {
//   method: 'POST',
//   url: 'https://doubletap-consulting.auth0.com/oauth/token',
//   headers: {
//     'Authorization': process.env.AUTH0_AUTHORIZATION,
//     'content-type': 'application/json'
//   },
//   body: {
//     grant_type: 'cgr_kSea3L6lQi3c0ZCV',
//     client_id: process.env.AUTH0_CLIENT_ID,
//     client_secret: process.env.AUTH0_SECRET,
//     audience: 'https://doubletap-consulting.auth0.com/api/v2/userinfo'
//   },
//   json: true
// };

// request(tokenOptions, function (error, response, body) {
//   if (error) throw new Error(error);
//   console.log('body2', body);
//   process.env.AUTH0_AUTH_TOKEN = 'hithere'
//   console.log('authtoken', process.env.AUTH0_AUTH_TOKEN)
// });
// });