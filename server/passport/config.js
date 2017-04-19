const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/userModel.js');
const bcrypt = require('bcrypt-nodejs');

let LocalLogin = new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
(req, username, password, done) => {
  process.nextTick(function() {
    UserModel.getUserByUsername(username).then(user => {
      if(!user) {
        return done(null, false, req.flash('loginMessage', 'Wrong Username or Password'));
      }
      if(!bcrypt.compareSync(password, user.password)) {
        return done(null, false, req.flash('loginMessage', 'Wrong Username or Password'));
      }
      return done(null, user);
    })
  });
});

let LocalSignup = new LocalStrategy({
  usernameFeild: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, 
(req, username, password, done) => {
  process.nextTick(function() {
    UserModel.getUserByUsername(username).then(user => {
      if(!user) {
        password = bcrypt.hashSync(password);
        UserModel.storeUser(username, password, req.body.email).then(user => {
          return done(null, user);
        })
      } else {
        return done(null, false, req.flash('signupMessage', 'Username Already Taken'));
      }
    });
  });
});

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    if (Array.isArray(user)) {
      var id = user[0];
      user = {
        id: id
      };
    }
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    UserModel.getUserById(id).then(data => {
      let user = {
        id: data.id,
        username: data.username,
        email:data.email
      };
      passport.user = user;
      done(null, data);
    });
  });
  passport.use('local-login',LocalLogin); 
  passport.use('local-signup', LocalSignup);
}