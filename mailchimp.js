$(document).ready(function () {
  console.log('ex');
  var $form = $('#mc-embedded-subscribe-form')
  if ($form.length > 0) {
    $('form button[type="submit"]').bind('click', function (event) {
      if (event) event.preventDefault();
      if (validateEmail($('#mce-EMAIL').val())) {
          register($form)
      } else {
          $('#message').empty();
          $('#message').append('<div class="ta st message-right">Something seems off with the email.</div>');
          $('#mce-EMAIL').removeClass('tt').addClass('z');
      }
    })
  }
})

function validateEmail(email) 
  {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }


function register($form) {
  $('#mc-embedded-subscribe').text('Listing you...');
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache: false,
    dataType: 'jsonp',
    contentType: 'application/json; charset=utf-8',
    error: function (err) {
        $('#mc-embedded-subscribe').text('Early Access');
        if(err.status === 200) {
          $('#message').empty();
          $('#message').append('<div class="ta sr message-right">Way to huddle! 🚀</div>');
          $('#mce-EMAIL').removeClass('z').addClass('tt');
          $('#mce-EMAIL').val('')
        } else {
          $('#message').empty();
          $('#message').append('<div class="ta st message-right">Something seems off. We\'re working on this.</div>');
          $('#mce-EMAIL').removeClass('tt').addClass('z');
        }
     },
    success: function (data) {
        $('#mc-embedded-subscribe').text('Early Access');
      if (data.result === 'success') {
          $('#message').empty();
          $('#message').append('<div class="ta sr message-right">Way to huddle! 🚀</div>');
          $('#mce-EMAIL').removeClass('z').addClass('tt');
          $('#mce-EMAIL').val('')
      } else {
      $('#message').empty();
        $('#message').append('<div class="ta st message-right">Something seems off. We\'re working on this.</div>');
        $('#mce-EMAIL').removeClass('tt').addClass('z');
      }
    }
  })
};