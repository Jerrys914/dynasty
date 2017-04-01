let express = require('express');
let path = require('path');
let base64 = require('base-64');
let request = require('request');
let LeagueModel = require('./models/leagueModel.js')
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

  app.get('/logout', (req, res) => {
    req.logout(); //Delete session for user
    res.redirect('/'); //Redirect to '/' which will redirect to /api/login
  });
//======================================================================================================================================

// Data Routes
//======================================================================================================================================
  app.get('/api/nba/playerStatsYTD', (req, res) => {
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

  app.get('/api/nba/dailyStats', (req,res) => {
    let d = new Date();
    let year = d.getFullYear() + '';
    let month = ((d.getMonth() + 1) <9) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1) + '';
    let day = d.getDate() < 10 ? '0'+ d.getDate() : d.getDate() + '';
    let date = year + month + day;

    let options = {
      url: 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/daily_player_stats.json?fordate=' + date,
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

  app.get('/api/nfl/playerStatsYTD', (req, res) => {
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

  app.get('/api/nfl/dailyStats', (req,res) => {
    let d = new Date();
    let year = d.getFullYear() + '';
    let month = ((d.getMonth() + 1) <9) ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1) + '';
    let day = d.getDate() < 10 ? '0'+ d.getDate() : d.getDate() + '';
    let date = year + month + day;

    let options = {
      url: 'https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular/daily_player_stats.json?fordate=' + date,
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
//======================================================================================================================================

// League Routes
//======================================================================================================================================
  app.get('/api/myLeagues', (req, res) => {
    console.log('PASSPORT USER: ',passport.user)
    let leaguesArr = LeagueModel.getLeaguesById(passport.user.id)
    console.log('LEAGUES ARRAY: ', leaguesArr )
    Promise.all([leaguesArr]).then(result => {
      console.log('RESULT ROUTES: ', result)
      res.send(result[0]);
    })
    // Promise.resolve(leaguesArr).then(leagues => {
    //   console.log('LEAGUES+++++++++++: ', leagues)
    //   Promise.all(leagues).then(leagues => {
    //     let lgs = [];
    //     leagues.forEach(league => {
    //       console.log('*************: ', league)
    //       lgs.push(league[0]);
    //     })
    //     Promise.all(lgs).then(L => {
    //       console.log('lgs: ', L)
    //       res.send(L)
    //     });
    //   })
    // });
  })
  app.get('/api/createNewLeague', isLoggedIn, (req, res) => {
    console.log('Render New League Form');
    res.render('createNewLeague.ejs');
  })
  app.post('/api/createNewLeague', (req, res) => {
    console.log('req.body: ', req.body);
    console.log('User: ', passport.user);
    LeagueModel.createNewLeague(req.body.leagueName, passport.user.id);
    res.redirect('/');
  })
//======================================================================================================================================
};