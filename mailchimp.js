$(document).ready(function () {
  console.log('ex');
  var $form = $('#mc-embedded-subscribe-form')
  if ($form.length > 0) {
    $('form button[type="submit"]').bind('click', function (event) {
      if (event) event.preventDefault();
      if (validateEmail($('#mce-EMAIL').val())) {
          register($form, '#mc-embedded-subscribe', '#message', '#mce-EMAIL', 'Early Access', true)
      } else {
          $('#message').empty();
          $('#message').append('<div class="ta st message-right">Something seems off with the email.</div>');
          $('#mce-EMAIL').removeClass('tt').addClass('z');
      }
    })
  }
  var $basicForm = $('#mc-embedded-subscribe-form-basic')
  if ($basicForm.length > 0) {
    $('#mc-embedded-subscribe-form-basic button[type="submit"]').bind('click', function (event) {
      if (event) event.preventDefault();
      if (validateEmail($('#mce-EMAIL-basic').val())) {
          register($basicForm, '#mc-embedded-subscribe-basic', '#message-basic', '#mce-EMAIL-basic', 'Let\'s try', false);
      } else {
          $('#message-basic').empty();
          $('#message-basic').append('<div class="ta st message-right">Something seems off with the email.</div>');
          $('#mce-EMAIL-basic').removeClass('tt').addClass('z');
      }
    })
  }
  var $businessForm = $('#mc-embedded-subscribe-form-business')
  if ($businessForm.length > 0) {
    $('#mc-embedded-subscribe-form-business button[type="submit"]').bind('click', function (event) {
      if (event) event.preventDefault();
      if (validateEmail($('#mce-EMAIL-business').val())) {
          register($businessForm, '#mc-embedded-subscribe-business', '#message-business', '#mce-EMAIL-business', 'Let\'s try', false);
      } else {
          $('#message-business').empty();
          $('#message-business').append('<div class="ta st message-right">Something seems off with the email.</div>');
          $('#mce-EMAIL-business').removeClass('tt').addClass('z');
      }
    })
  }
  var $enterpriseForm = $('#mc-embedded-subscribe-form-enterprise')
  if ($enterpriseForm.length > 0) {
    $('#mc-embedded-subscribe-form-enterprise button[type="submit"]').bind('click', function (event) {
      if (event) event.preventDefault();
      if (validateEmail($('#mce-EMAIL-enterprise').val())) {
          register($enterpriseForm, '#mc-embedded-subscribe-enterprise', '#message-enterprise', '#mce-EMAIL-enterprise', 'Let\'s try', false);
      } else {
          $('#message-enterprise').empty();
          $('#message-enterprise').append('<div class="ta st message-right">Something seems off with the email.</div>');
          $('#mce-EMAIL-enterprise').removeClass('tt').addClass('z');
      }
    })
  }
  var $footerForm = $('#mc-embedded-subscribe-form-footer')
  if ($footerForm.length > 0) {
    $('#mc-embedded-subscribe-form-footer button[type="submit"]').bind('click', function (event) {
      if (event) event.preventDefault();
      if (validateEmail($('#mce-EMAIL-footer').val())) {
          register($footerForm, '#mc-embedded-subscribe-footer', '#message-footer', '#mce-EMAIL-footer', 'Let\'s try', false);
      } else {
          $('#message-footer').empty();
          $('#message-footer').append('<div class="ta st message-right">Something seems off with the email.</div>');
          $('#mce-EMAIL-footer').removeClass('tt').addClass('z');
      }
    })
  }
})

function validateEmail(email) 
  {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }


function register($form, buttonId, messageContainerId, inputId, buttonText, isRight) {
  $(buttonId).text('Listing you...');
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache: false,
    dataType: 'jsonp',
    contentType: 'application/json; charset=utf-8',
    error: function (err) {
        $(buttonId).text(buttonText);
        if(err.status === 200) {
          $(messageContainerId).empty();
          $(messageContainerId).append(`<div class="ta sr ${isRight ? 'message-right' : '' }">Way to huddle! 🚀</div>`);
          $(inputId).removeClass('z').addClass('tt');
          $(inputId).val('')
        } else {
          $(messageContainerId).empty();
          $(messageContainerId).append(`<div class="ta st ${isRight ? 'message-right' : '' }">Something seems off. We\'re working on this.</div>`);
          $(inputId).removeClass('tt').addClass('z');
        }
     },
    success: function (data) {
        $(buttonId).text(buttonText);
      if (data.result === 'success') {
          $(messageContainerId).empty();
          $(messageContainerId).append(`<div class="ta sr ${isRight ? 'message-right' : '' }">Way to huddle! 🚀</div>`);
          $(inputId).removeClass('z').addClass('tt');
          $(inputId).val('')
      } else {
      $(messageContainerId).empty();
        $(messageContainerId).append(`<div class="ta st ${isRight ? 'message-right' : '' }">Something seems off. We\'re working on this.</div>`);
        $(inputId).removeClass('tt').addClass('z');
      }
    }
  })
};