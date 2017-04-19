let api_key = process.env.MAILGUN_API_KEY;
let domain = process.env.MAILGUN_DOMAIN;
let mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
let sendMail = (toEmail, link) => {
  let data = {
    "from":"Dynasty <mailgun@sandbox6e7fa3b4b4924e9ea155c44397a15552.mailgun.org>",
    "to": toEmail,
    "subject": "TEST",
    "html": `<html>EMAIL TESTING FOR DYNASTY<br /><br />
              <a href="`+link+`">Click Here To Join</a></html>`
  };
   
  mailgun.messages().send(data, function (error, body) {
    console.log('message sent: ',body);
  });
}

module.exports = {
  sendMail
}