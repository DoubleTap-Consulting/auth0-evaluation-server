const auth0Controller = {}
const request = require('request')

// ******** UNUSED *********
auth0Controller.createConnection = (req, res) => {
  var options = {
    method: 'POST',
    url: 'https://doubletap-consulting.auth0.com/api/v2/connections',
    headers: {
      'Authorization': process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    body: {
      name: "email",
      strategy: "email"
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log('data', body);
    res.status(200).send({
      data: body
    })
  });
}

// ******** UNUSED *********
auth0Controller.getConnection = (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://doubletap-consulting.auth0.com/api/v2/connections',
    headers: {
      'Authorization': process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    body: {
      name: "email",
      strategy: "email"
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log('data', body);
    res.status(200).send({
      data: body
    })
  });
}


module.exports = auth0Controller

