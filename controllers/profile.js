const profileController = {}
const request = require('request')

profileController.getUser = (req, res) => {
  var options = {
    method: 'GET',
    url: `/api/v2/users/${req.headers.userId}`,
    headers:
    {
      authorization: process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    }
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
  });
}

profileController.updateUser = (req, res) => {
  var options = {
    method: 'PATCH',
    url: `/api/v2/users/${req.headers.userId}`,
    headers:
    {
      authorization: process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    }
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
  });
}

profileController.removeUserProvider = (req, res) => {
  var options = {
    method: 'DELETE',
    url: `/api/v2/users/${req.headers.userId}/identities/${req.body.provider}/${req.headers.userId}`,
    headers:
    {
      authorization: process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    }
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
  });
}

profileController.linkUser = (req, res) => {
  const options = {
    method: 'POST',
    url: `/api/v2/users/${req.headers.userId}/identities`,
    headers:
    {
      authorization: process.env.AUTH0_AUTHORIZATION,
      'content-type': 'application/json'
    }
  };

  // data:
  // "provider": "SECONDARY_ACCOUNT_PROVIDER",
  // "connection_id": "SECONDARY_ACCOUNT_CONNECTION_ID(OPTIONAL)",
  // "user_id": "SECONDARY_ACCOUNT_USER_ID"

  request(options, (error, response, body) => {
    if (error) throw new Error(error);

    console.log(body);
  });
}



module.exports = profileController


// https://auth0.com/docs/api/management/v2#!/Users/get_users_by_id
// https://auth0.com/docs/api/management/v2#!/Users/patch_users_by_id
// https://auth0.com/docs/api/management/v2#!/Users/delete_provider_by_user_id
// https://auth0.com/docs/api/management/v2#!/Users/post_identities