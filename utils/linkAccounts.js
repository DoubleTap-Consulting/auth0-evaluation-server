const request = require('request-promise')

let linkAccounts = {}

linkAccounts.possibleAccountLinkCheck = (userId) => {
  let potentialLinkAccounts = []
  var p1 = new Promise((resolve, reject) => {
    linkAccounts.getUser(userId)
      .then((user) => {
        resolve(user)
      })
  });
  var p2 = new Promise((resolve, reject) => {
    linkAccounts.getUsers()
      .then(users => {
        resolve(users)
      })
  });

  return Promise.all([p1, p2]).then(results => {
    console.log(results); // [3, 1337, "foo"]
    const checkForMatches = new Promise((resolve, reject) => {
      results[1].forEach((user) => {
        console.log('checking match')
        if (result[0].email === user.email) {
          console.log('found', user)
          potentialLinkAccounts.push({
            provider: user.provider,
            user_id: user.user_id,
            name: user.name
          })
        }
      })
      console.log('here')
      resolve()
    });
    return checkForMatches
      .then(res => {
        console.log('inside update user section with: ', potentialLinkAccounts)
        return linkAccounts.updateUser(userId, potentialLinkAccounts)
      })
  });
}

linkAccounts.getUser = (userId) => {
  var options = {
    method: 'GET',
    url: `https://doubletap-consulting.auth0.com/api/v2/users/${userId}`,
    headers: {
      'Authorization': process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    json: true
  };

  return request(options, (error, response, body) => {
    if (error || body.error) {
      return {
        error
      }
    }
    return {
      error: null,
      user: body
    }
  });
}

linkAccounts.getUsers = () => {
  var options = {
    method: 'GET',
    url: `https://doubletap-consulting.auth0.com/api/v2/users`,
    headers: {
      'Authorization': process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    json: true
  };

  return request(options, (error, response, body) => {
    if (error || body.error) {
      return {
        error
      }
    }
    return {
      error: null,
      users: body
    }
  });
}

linkAccounts.updateUser = (userId, potentialLinkAccounts) => {
  var options = {
    method: 'PATCH',
    url: `https://doubletap-consulting.auth0.com/api/v2/users/${userId}`,
    headers: {
      authorization: process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    },
    json: true,
    body: {
      meta_data: {
        potentialLinkAccounts
      }
    }
  };

  request(options, (error, response, body) => {
    if (error || body.error) {
      return {
        error
      }
    }
    return {
      error: null,
      user: body
    }
  })
}

module.exports = linkAccounts