/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  const loadTweets = () => {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: function(res) {
        renderTweets(res);
      }
    });
  };

  loadTweets();

  const $tweetMax = $('.counter').val();

  $('#submit-tweet').submit(function(event) {
    event.preventDefault();
    const $userTweet = $('#tweet-text');
    const $tweetCount = $('.counter').val();

    $('#error-msg').empty();
    $('#error-msg').css("display", "none");

    if ($userTweet.val() !== '') {
      if ($tweetCount < $tweetMax && $tweetCount > -1) {
        $.ajax({
          type: "POST",
          url: "/tweets",
          data: $(this).serialize(),
          success: function() {
            $('#submit-tweet').slideUp('slow');
            $('#error-msg').empty();
            $('#error-msg').css("display", "none");
            $userTweet.val('');
            $('.counter').val($tweetMax);
            loadTweets();
          }
        });
      }
    }
    if ($tweetCount === $tweetMax) {
      if ($('#error-msg').css("visibility", "visible")) {
        $('#error-msg').css("display", "none");
        $('#error-msg').slideUp();
        showError("Your tweet is empty, that would look silly on Tweeter.");
        return;
      }
      showError("Your tweet is empty, that would look silly on Tweeter.");
    } else if ($tweetCount < 0) {

      if ($('#error-msg').css("visibility", "visible")) {
        $('#error-msg').css("display", "none");
        $('#error-msg').slideUp();
        showError("Your tweet is too long, no one wants to read a novel");
        return;
      }
      showError("Your tweet is too long, no one wants to read a novel");
    }
  });
});


const renderTweets = (tweets) => {
  $('#tweets-container').empty();
  tweets.forEach(tweet =>  {
    const tweetElement = createTweetElement(tweet);
    $('#tweets-container').prepend(tweetElement);
  });
};

const createTweetElement = (tweets) => {
  const { user, content } = tweets;
  const timeAgo = timeago.format(tweets.created_at);
  const safeHTML = `<p>${escape(content.text)}</p>`;
  const tweet = (`
    <article class="tweets">
        <header>
          <div class="user">
            <img src="${user.avatars}" alt="user-icon">
            <p>${user.name}</p>
          </div>
          <p class="user-name">${user.handle}</p>
        </header>
        <div class="tweet-text">
          <p>${safeHTML}</p>
        </div>
        <footer>
          <p>${timeAgo}</p>
          <div class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i></div>
          </footer>
      </article>
  </html>`);
  return tweet;
};

const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const showError = (error) => {
  const errorEl = (`
  <i class="fa-solid fa-triangle-exclamation"></i> ${error} <i class="fa-solid fa-triangle-exclamation"></i>
  `);
  $('#error-msg').append(errorEl);
  $('#error-msg').css("visibility", "visible");
  $('#error-msg').slideDown('slow');
};