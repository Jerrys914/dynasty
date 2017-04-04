let express = require('express');
let path = require('path');
let base64 = require('base-64');
let request = require('request');
let LeagueModel = require('./models/leagueModel.js');
let MemberModel = require('./models/memberModel.js');
let TeamModel = require('./models/teamModel.js');
let authorization = base64.encode(process.env.USERNAME+':'+process.env.PASSWORD);

const isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) { //Check if the user has a valid session based on cookie
    return next(); //If session continue
  }
  res.redirect('/api/login'); //Redirect to /api/login if no user session 
};

module.exports = (app, passport) => {

// Login/Signup Routes
//======================================================================================================================================
  app.get('/', isLoggedIn, (req, res)=> {
    app.use(express.static(path.join(__dirname, '/../client')));
    res.sendFile(path.join(__dirname, '/../client/index.html'))
  });

  app.get('/api/login',(req, res) => {
    res.render('login.ejs', {message: req.flash('loginMessage')}); //Render views/login.ejs w/ flash message
  });
  app.post('/api/login',passport.authenticate('local-login',{
    successRedirect: '/', //Redirect to '/' route
    failureRedirect: '/api/login', //Redirect back to login page on failure
    failureFlash : true //Allow flash messages
  }));

  app.get('/api/signup',(req, res) => {
    res.render('signup.ejs', {message: req.flash('signupMessage')}); //Render views/signup.ejs w/ flash message
  });
  app.post('/api/signup', passport.authenticate('local-signup', { 
    successRedirect: '/', //Redirect to '/' route
    failureRedirect: '/api/signup', //Redirect back to signup page on failure
    failureFlash: true //Allow flash messages
  }));

  app.get('/api/logout', isLoggedIn, (req, res) => {
    req.logout(); //Delete session for user
    res.redirect('/'); //Redirect to '/' which will redirect to /api/login
  });
//======================================================================================================================================

// Data Routes
//======================================================================================================================================
  app.get('/api/nba/playerStatsYTD', isLoggedIn, (req, res) => {
    let options = {
      url: 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/cumulative_player_stats.json',
      headers: {
       'User-Agent': 'request',
        'Authorization': 'Basic ' + authorization
      }
    };
    const callback = (err, response, data) => {
      res.send(JSON.parse(data))
    };
    request(options, callback);
  });

  app.get('/api/nba/dailyStats', isLoggedIn, (req,res) => {
    let d = new Date();
    let year = d.getFullYear() + '';
    let month = ((d.getMonth() + 1) <9) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1) + '';
    let day = d.getDate() < 10 ? '0'+ d.getDate() : d.getDate() + '';
    let date = year + month + day;

    let options = {
      url: 'https://www.mysportsfeeds.com/api/feed/pull/nba/latest/daily_player_stats.json?fordate=' + date,
      headers: {
       'User-Agent': 'request',
        'Authorization': 'Basic ' + authorization
      }
    };
    const callback = (err, response, data) => {
      if(data){
        res.send(JSON.parse(data))
      } else {
        res.send(data)
      }
    };
    request(options,callback);
  });

  app.get('/api/nfl/playerStatsYTD', isLoggedIn, (req, res) => {
    let options = {
      url: 'https://www.mysportsfeeds.com/api/feed/pull/nfl/2016-regular/cumulative_player_stats.json',
      headers: {
       'User-Agent': 'request',
        'Authorization': 'Basic ' + authorization
      }
    };
    const callback = (err, response, data) => {
      res.send(JSON.parse(data))
    };
    request(options, callback);
  });

  app.get('/api/nfl/dailyStats', isLoggedIn, (req,res) => {
    let d = new Date();
    let year = d.getFullYear() + '';
    let month = ((d.getMonth() + 1) <9) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1) + '';
    let day = d.getDate() < 10 ? '0'+ d.getDate() : d.getDate() + '';
    let date = year + month + day;

    let options = {
      url: 'https://www.mysportsfeeds.com/api/feed/pull/nfl/latest/daily_player_stats.json?fordate=' + date,
      headers: {
       'User-Agent': 'request',
        'Authorization': 'Basic ' + authorization
      }
    };
    const callback = (err, response, data) => {
      if(data){
        res.send(JSON.parse(data))
      } else {
        res.send(data)
      }
    };
    request(options,callback);
  });

  app.get('/api/mlb/playerStatsYTD', isLoggedIn, (req, res) => {
    let options = {
      url: 'https://www.mysportsfeeds.com/api/feed/pull/mlb/latest/cumulative_player_stats.json',
      headers: {
       'User-Agent': 'request',
        'Authorization': 'Basic ' + authorization
      }
    };
    const callback = (err, response, data) => {
      res.send(JSON.parse(data))
    };
    request(options, callback);
  });
//======================================================================================================================================

// League Routes
//======================================================================================================================================
  app.get('/api/myLeagues', isLoggedIn, (req, res) => {
    let leaguesArr = LeagueModel.getLeaguesById(passport.user.id)
    Promise.all([leaguesArr]).then(result => {
      res.send(result[0]);
    })
  })

  app.get('/api/createNewLeague', isLoggedIn, (req, res) => {
    res.render('createNewLeague.ejs');
  })
  app.post('/api/createNewLeague', (req, res) => {
    LeagueModel.createNewLeague(req.body.leagueName, passport.user);
    res.redirect('/');
  })

  app.get('/api/myTeams', isLoggedIn, (req, res) => {
    let memberId = MemberModel.getMemberId(passport.user.id);
    Promise.all([memberId]).then(id => {
      let member = id[0][0];
      TeamModel.getTeamsByMemberId(member.id).then(teams => {
        res.send(teams);
      })
    })
  })

  app.get('/api/getLeagueMembers/:leagueInfo', isLoggedIn, (req,res) => {
    let membersArr = MemberModel.getLeagueMembers(passport.user.id, req.params.leagueInfo);
    Promise.all([membersArr]).then(members => {
      console.log('Members: ', members);
      members = members[0];
      res.send(members);
    });
  });
//======================================================================================================================================

//User Routes
//======================================================================================================================================
app.get('/api/getUserInfo', isLoggedIn, (req, res) => {
  res.send(passport.user);
})
//======================================================================================================================================
};