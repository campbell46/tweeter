$(document).ready(function() {

  $(window).onscroll = function() {
    scrollFunction();
  };

  $('#top-btn').on('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    $('textarea').focus();

    $('#submit-tweet').slideDown('slow', function() {
      $('textarea').focus();
      $('#top-btn').style.display = 'none';
    });
  });

  const scrollFunction = () => {
    const $topBtn = document.getElementById('top-btn');
    const $newTweet = $('#new-tweet');
    if (document.documentElement.scrollTop() > 20) {
      console.log('heyyy');
      $topBtn.css('display') === 'block';
      $newTweet.css('display') === 'none';
    } else {
      $topBtn.style.display = "none";
      console.log('hiiii');
    }
  };
});