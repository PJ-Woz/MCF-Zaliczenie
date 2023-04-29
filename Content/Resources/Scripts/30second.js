var interval3;

function countdown3() {
  clearInterval(interval3);
  interval3 = setInterval( function() {
      var timer = $('.js-30seconds').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 0;
          seconds = 30;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.js-30seconds').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearinterval(interval3);
  }, 1000);
}

$('#js-startTimer3').click(function () {
  $('.js-30seconds').text("00:30");
  countdown3();
});

$('#js-resetTimer3').click(function () {
  $('.js-30seconds').text("00:30");
  clearInterval(interval3);
});