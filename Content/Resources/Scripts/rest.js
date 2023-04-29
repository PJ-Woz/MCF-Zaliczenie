var interval2;

function countdown2() {
  clearInterval(interval2);
  interval2 = setInterval( function() {
      var timer = $('.js-rest').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 0;
          seconds = 20;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.js-rest').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearinterval(interval2);
  }, 1000);
}

$('#js-startTimer2').click(function () {
  $('.js-rest').text("00:20");
  countdown2();
});

$('#js-resetTimer2').click(function () {
  $('.js-rest').text("00:20");
  clearInterval(interval2);
});