'use strict';

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var moment = require('moment');

var Message = require('../models/message.js');

router.get('/', function(req, res){
  Message.find({}).sort({_id: -1}).exec(function(err, messages){
    if (err) res.status(400).send(err);
    console.log(messages);
    res.render('index', {messageboard: messages});
  });
});

router.post('/', function(req, res){
  console.log('here', req.body);
  // req.body.time = moment().format('MMMM Do YYYY, h:mm:ss a');
  req.body.time = Date.now();


  var message = new Message(req.body);
  // console.log('message: ', message);

  message.save(function(err, postedMessage){
    res.redirect('/');
  });

});

module.exports = router;
