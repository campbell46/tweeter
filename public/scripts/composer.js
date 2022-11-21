$(document).ready(function() {

  $(document).on('scroll', function() {
    scrollFunction();
  });

  $('.new-tweet').on('click', function() {
    $('#error-msg').slideUp('slow');
    tweetToggle();
  });

  $('#top-btn').on('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('#error-msg').slideUp('slow');

    tweetDown();
  });
});

const scrollFunction = () => {
  const $topBtn = $('#top-btn');
  const $newTweetBtn = $('.new-tweet');
  if ($(document).scrollTop() > 250) {
    $topBtn.css('display', 'block');
    $newTweetBtn.css('display', 'none');
  } else {
    $topBtn.css('display', 'none');
    $newTweetBtn.css('display', 'inherit');
  }
}

const tweetToggle = () => {
  $('#submit-tweet').slideToggle('slow', function() {
    if ($('#submit-tweet').css('display') === 'none') {
      $('#tweet-text').val('');
      $('.counter').val(140);
      $('.counter').removeClass("red-font");
    } else {
      $('textarea').focus();
    }
  });
};

const tweetDown = () => {
  if ($('#submit-tweet').css('display') === 'none') {
    $('#submit-tweet').slideDown('slow', function() {
      $('.counter').val(140);
      $('textarea').focus();
      $('#top-btn').css('display', 'none');
    });
  } else {
    $('textarea').focus();
  }
};