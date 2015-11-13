'use strict';

$(document).ready(init);

function init(){
  $('body').on('click', '.comment', addComment);
}

function addComment(event){
  var timestamp = $(event.target).parent().siblings().find('.time').text().split(' ')[2]

  $.ajax({
     url: '/comments',
     type: 'PUT',
     data: {timestamp: timestamp},
    //  contentType: 'application/json',
     success: function(result) {
       console.log("success");
     }
   });
}
