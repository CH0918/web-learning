// 轮播图
(function (doc) {
  // 左右箭头绑定点击事件，点击ul整体左右移动一张图片的距离
  var arrowLeft = doc.getElementsByClassName('arrow-left')[0],
    arrowRight = doc.getElementsByClassName('arrow-right')[0],
    swiperImgList = doc.getElementsByClassName('swiper-img'),
    oUl = doc.getElementsByClassName('swiper-list')[0],
    paginationItemList = doc.getElementsByClassName('p-item'),
    paginationItemLen = paginationItemList.length,
    wrapper = doc.getElementsByClassName('swiper-wrapper')[0];

  var swiperWidth = parseInt(getSite(swiperImgList[0], 'width')),
    swiperTotalWidth = swiperWidth * (swiperImgList.length - 1);
  var curIndex = 0,
    moveDistance = 0;
  var timer = null,
    speed = 7;

  function moveX(el, x) {
    el.style.left = -x + 'px';
  }

  // 下一张
  function nextSwiper() {
    if (timer) return;
    moveDistance += swiperWidth;
    curIndex++;
    var distance = 0;
    var l = !oUl.style.left ? 0 : oUl.style.left,
      pLeft = parseInt(l);
    timer = setInterval(function () {
      distance += speed;
      if (distance >= swiperWidth) {
        clearInterval(timer);
        timer = null;
        moveX(oUl, moveDistance);
      } else {
        moveX(oUl, -pLeft + distance);
      }
    }, 1);
    // 如果是最后一张，瞬移到第一张
    if (curIndex === swiperImgList.length - 1) {
      moveX(oUl, 0);
      moveDistance = 0;
      curIndex = 0;
    }
    handlePaginationCircleStyle();
  }

  // 上一张
  function preSwiper() {
    if (timer) return;
    // 如果是第一张，瞬移到第最后一张
    if (curIndex === 0) {
      console.log(1);
      moveDistance = swiperTotalWidth;
      moveX(oUl, moveDistance);
      curIndex = swiperImgList.length - 1;
    }
    moveDistance -= swiperWidth;
    curIndex--;
    var distance = 0;
    var l = !oUl.style.left ? 0 : oUl.style.left,
      pLeft = parseInt(l);
    console.log(pLeft);
    timer = setInterval(function () {
      distance += speed;
      if (distance >= swiperWidth) {
        clearInterval(timer);
        timer = null;
        moveX(oUl, moveDistance);
      } else {
        moveX(oUl, -(pLeft + distance));
      }
    }, 1);
    handlePaginationCircleStyle();
  }

  // 绑定左右移动点击事件
  bindEvent(arrowRight, 'click', nextSwiper);
  bindEvent(arrowLeft, 'click', preSwiper);

  // 处理分页小圆点激活样式
  function handlePaginationCircleStyle() {
    for (var i = 0; i < paginationItemLen; i++) {
      var item = paginationItemList[i];
      item.className = 'fl p-item';
    }
    paginationItemList[curIndex].className += ' active';
  }

  // 分页事件绑定
  for (var i = 0; i < paginationItemLen; i++) {
    var item = paginationItemList[i];
    (function (i) {
      bindEvent(item, 'click', function () {
        if (i === curIndex) return;
        i > curIndex ? nextSwiper() : preSwiper();
        curIndex = i;
      });
    })(i);
  }

  // 定时器循环播放轮播图
  var defaultTimer = setInterval(function () {
    nextSwiper();
  }, 2000);
  bindEvent(wrapper, 'mouseenter', function () {
    console.log(111);
    clearInterval(defaultTimer);
    defaultTimer = null;
  });
  bindEvent(wrapper, 'mouseleave', function () {
    defaultTimer = setInterval(function () {
      nextSwiper();
    }, 2000);
  });
})(document);
