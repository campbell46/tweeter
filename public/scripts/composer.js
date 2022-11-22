$(document).ready(function() {

  //check for scrollTop positioning
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

//scrolls to top of page, hides button
const scrollFunction = () => {
  const $topBtn = $('#top-btn');
  const $newTweetBtn = $('.new-tweet');
  if ($(document).scrollTop() > 150) {
    $topBtn.css('display', 'block');
    $newTweetBtn.css('display', 'none');
  } else {
    $topBtn.css('display', 'none');
    $newTweetBtn.css('display', 'inherit');
  }
}

//Toggle tweet box up/down
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

//Slides tweet box down
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