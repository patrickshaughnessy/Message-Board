'use strict';

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Message = require('../models/message.js');

router.put('/', function(req, res){
  console.log(req.body);
  var timestamp = req.body
})


module.exports = router;
