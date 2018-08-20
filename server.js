var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

// time
require('date-utils');
var dt = new Date();

// define model
var User = require('./models/user')

// connect to mongodb server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // connected to mongodb server
    console.log("Connected to mongodb server" + dt.toFormat("YYYY-MM-DD HH24:MI:SS"));
});
mongoose.connect('mongodb://localhost:27017/mongodb_tutorial');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));

var router = require('./router/main')(app, User);