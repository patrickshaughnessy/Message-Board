'use strict';

require('dotenv').load();

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var PORT = process.env.PORT || 3000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@ds053954.mongolab.com:53954/messageboard1' || 'mongodb://localhost/messageboard');

var app = express();

app.set('view engine', 'jade');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', require('./routes/index'));
app.use('/comments', require('./routes/comments'))

// 404 Handler
app.use(function(req, res){
  res.status(404).render('404')
});

app.listen(PORT, function(){
  console.log('Listening on port, ', PORT);
});
