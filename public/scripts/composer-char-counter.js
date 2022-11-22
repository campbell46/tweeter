$(document).ready(function() {
  const $maxCount = $('.counter').val();
  
  //displays avail characters remaining in tweet box
  $("#tweet-text").keyup(function() {
    const $textLength = $(this).val().length;
    const $counter = $('output.counter');

    $counter.val($maxCount - $textLength);

    if ($counter.val() < 0) {
      $counter.addClass("red-font");
    } else if ($counter.val() >= 0) {
      $counter.removeClass("red-font");
    }
  });
});
