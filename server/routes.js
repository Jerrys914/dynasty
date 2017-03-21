let express = require('express');
let path = require('path');
let base64 = require('base-64');
let request = require('request');
let authorization = base64.encode(process.env.USERNAME+':'+process.env.PASSWORD);

module.exports = (app) => {
  app.get('/',(req, res)=> {
    app.use(express.static(path.join(__dirname, '/../client')));
    res.sendFile(path.join(__dirname, '/../client/index.html'))
  });

  app.get('/api/playerStatsYTD', (req, res) => {
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

  app.get('/api/dailyStats', (req,res) => {
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
};