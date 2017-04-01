require('dotenv').config();
require('./db/config.js');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(session({ //Set up express to use sessions and set secret
  secret:"someSecret",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize()); //Initialize passport
app.use(passport.session()); //Equevelent to app.use(passport.authenticate('session'));
app.use(flash()); //Attach flash function to requests
require('./passport/config.js')(passport);
require('./routes.js')(app, passport);
let port = process.env.PORT || 4000;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});

module.exports = app;
