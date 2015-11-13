'use strict';

$(document).ready(init);

function init(){
  $('body').on('click', '.comment', addComment);
}

function addComment(event){
  var timestamp = $(event.target).parent().siblings().find('.time').text().split(' ')[2];
  var $commentsArea = $(this).closest('div').siblings().find('.commentsArea');
  var $input = $('<textarea>').addClass('newComment');
  var $submit = $('<button>').addClass('btn btn-primary submitComment').text('Submit');
  var $div = $('<div>').attr('id', ('d' + timestamp)).append($input, $submit);
  $commentsArea.append($div);

  $('.submitComment').one('click', sendComment);
}

function sendComment(event){

  var comment = {}

  comment.timestamp = $(event.target).closest('div .message').siblings('.left').find('.time').text().split(' ')[2];
  comment.commentText = $(event.target).siblings().val();
  comment.time = Date.now();

  $.post('/comments', comment)
  .done(function(data){
    // var commentText = data.comments.comment;
    console.log(data);
    var $comment = $('<p>').text(data.comments.comment);
    // var name = data.comments.name;
    var locationTimestamp = '#d' + data.time;
    $(locationTimestamp).prepend($comment);

  }).fail(function (err){
    console.error(err);
  });
}
