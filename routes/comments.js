'use strict';

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Message = require('../models/message.js');

router.post('/', function(req, res){
  console.log(req.body);
  var timestamp = req.body.timestamp;
  var time = req.body.time;
  var commentText = req.body.commentText;

  Message.find({time: timestamp}, function(err, message){
    console.log('message', message, time);

    if (message[0].comments.time.length === 0){
      message[0].comments.time = [];
      message[0].comments.comment = [];
    }
    message[0].comments.time.push(time);
    message[0].comments.comment.push(commentText);
    message[0].save(function(err, message){
      res.send(message);
    })
  })
})


module.exports = router;
