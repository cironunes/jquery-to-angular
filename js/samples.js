
(function($) {
  'use strict';

  var $domSample, $animationsSample, $ajaxSample;

  // dom sample
  $domSample = $('#dom-sample');

  $domSample.find('input').on('keyup', function() {
    var val = $(this).val();
    $domSample.find('p').html('Olá ' + val);
  });

  // animations sample
  $animationsSample = $('#animation-sample');
  $animationsSample.find('p').hide();

  $animationsSample.find('button').on('click', function() {
    $animationsSample.find('p').fadeToggle();
  });

  // ajax sample
  $ajaxSample = $('#ajax-sample');

  $.ajax({
    type: 'get',
    url: 'http://search.twitter.com/search.json',
    dataType: 'jsonp',
    data: {q: '#riojs'},
    success: function(data) {
      var tweets = [];

      for(var i in data.results) {
        if(i < 3) {
          tweets.push('<li><img src="'+ data.results[i].profile_image_url +'"> '+ data.results[i].text +'</li>');
        }
      }

      tweets = tweets.join('');
      $ajaxSample.find('ul').html(tweets);
    }
  });

}(jQuery));