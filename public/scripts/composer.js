$(document).ready(function() {
  const $tweetMax = $('.counter').val();

  $(document).on('scroll', function() {
    scrollFunction();
  });


  $('.new-tweet').on('click', function() {
    $('#error-msg').slideUp('slow');
    // $('#error-msg').css("display", "none");
    $('#submit-tweet').slideToggle('slow', function() {
      if ($('#submit-tweet').css('display') === 'none') {
        $('#tweet-text').val('');
        $('.counter').val($tweetMax);
      } else {
        $('textarea').focus();
      }
    });
  });

  $('#top-btn').on('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    if ($('#submit-tweet').css('display') === 'none') {
      $('#submit-tweet').slideDown('slow', function() {
        $('.counter').val($tweetMax);
        $('textarea').focus();
        $('#top-btn').css('display', 'none');
      });
    }
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
  };
});