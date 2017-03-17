let express = require('express');
let path = require('path');
let app = express();
require('dotenv').config();
require('./routes.js')(app);

let port = process.env.PORT || 4000;
app.listen(port,(err) => {
  console.log("Listening on port " + port);
});
module.exports = app;