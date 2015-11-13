'use strict';

var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  name: String,
  message: String,
  time: Number,
  image: String,
  // comments: {
  //   time: Array,
  //   comment: Array
  // } || undefined
});

var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
