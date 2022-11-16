$(document).ready(function() {
  const $maxCount = $('output.counter').val();
  
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
