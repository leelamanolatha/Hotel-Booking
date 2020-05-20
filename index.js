var express  = require('express'),
bodyParser   = require('body-parser'),
session = require('express-session'),
http         = require('http'),
config       = require('./config'),
server       = express(),
mongoose     = require('mongoose'),
NameInfo     = require('./NameInfo') //created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl,{useNewUrlParser: true });
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

var routes = require('./Routes'); //importing route
server.use( session({
      secret: 'thisisasecret',
      saveUninitialized: false,
      resave: false
      }));
routes(server); //register the route
const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server started on port ${PORT}`));
// server.listen(( 8000), function () {
//     console.log("Server is up and listening on port 8000" );
// });

module.exports = server