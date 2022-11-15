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
    });
  };

  loadTweets();

  $('#submit-tweet').submit(function(event) {
    event.preventDefault();
    
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $(this).serialize(),
      success: loadTweets()
    });
  });
});


const renderTweets = (tweets) => {
  $('#tweets-container').empty();
  tweets.forEach(tweet =>  {
    const tweetElement = createTweetElement(tweet);
    $('#tweets-container').append(tweetElement);
  });
};

const createTweetElement = (tweets) => {
  const { user, content } = tweets;
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
          <p>${content.text}</p>
        </div>
        <footer>
          <p>${tweets.created_at}</p>
          <div class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i></div>
          </footer>
      </article>
  </html>`);
  return tweet;
};