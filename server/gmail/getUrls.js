let googleAuth = require('google-auth-library');

let scopes = ['https://www.googleapis.com/auth/gmail.send'];

let getAuthorizationUrl = (cb) => {
  // Load client secrets
  let clientSecret = process.env.GMAIL_CLIENT_SECRET;
  let clientId = process.env.GMAIL_CLIENT_ID;
  let redirectUrl = 'http://localhost:4000/api/gmail/callback';
  let auth = new googleAuth();
  let oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

  let authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes
  });
  return cb(null, authUrl);
};

module.exports = {
  getAuthorizationUrl
}