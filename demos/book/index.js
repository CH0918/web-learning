(function (doc) {
  var startBtn = document.querySelector('.start'),
    stopBtn = document.querySelector('.stop');

  var startTimer;
  function startClick() {
    startBtn.className = 'circle start hide';
    stopBtn.className = 'circle stop show';
    if (!startTimer) {
      startTimer = setInterval(function () {
        console.log(1);
        window.scrollBy(0, 2);
        var innerHeight = getViewportSite().height,
          pageYOffset = getScrollOffset().top,
          pageHeight = getScrollSize().height;
        if (innerHeight + pageYOffset >= pageHeight) {
          clearInterval(startTimer);
          startBtn.className = 'hide';
          stopBtn.className = 'hide';
        }
      }, 20);
    }
  }
  function stopClick() {
    startBtn.className = 'circle start show';
    stopBtn.className = 'circle stop hide';
    clearInterval(startTimer);
    startTimer = null;
  }

  bindEvent(startBtn, 'click', startClick);
  bindEvent(stopBtn, 'click', stopClick);
})(document);
