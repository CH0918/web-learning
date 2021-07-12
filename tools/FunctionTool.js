// 获取浏览器滚动条滚动的距离，兼容性写法
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset,
    };
  } else {
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    };
  }
}

// 获取可视区域
function getViewportSite() {
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  } else {
    if (document.compatMode === 'BackCompat') {
      // 怪异模式
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      };
    } else {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };
    }
  }
}

// 获取html文档的宽高
function getScrollSize() {
  if (document.body.scrollWidth) {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight,
    };
  } else {
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    };
  }
}
// 获取元素的计算样式
function getSite(ele, prop) {
  if (window.getComputedStyle) {
    return prop
      ? window.getComputedStyle(ele, null)[prop]
      : window.getComputedStyle(ele, null);
  } else {
    return prop ? window.currentStyle[prop] : window.currentStyle;
  }
}
// 获取元素相对浏览器窗口边距的距离
function getElementDocPosition(el) {
  // offsetParent 具有定位的父级元素
  var parent = el.offsetParent,
    offsetLeft = el.offsetLeft,
    offsetTop = el.offsetTop;
  while (parent) {
    offsetLeft += parent.offsetLeft;
    offsetTop += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return {
    left: offsetLeft,
    top: offsetTop,
  };
}

// 绑定事件 兼容IE
function bindEvent(el, type, fn) {
  if (el.addEventListener) {
    el.addEventListener(type, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent('on' + type, fn.bind(el));
  } else {
    el['on' + type] = fn;
  }
}

// 移除事件 兼容IE
function removeEvent(ele, type, fn) {
  if (ele.addEventListener) {
    ele.removeEventListener(type, fn, false);
  } else if (ele.attachEvent) {
    ele.detachEvent('on' + type, fn);
  } else {
    ele['on' + type] = null;
  }
}

// 兼容IE 取消冒泡
function cancelBubble(e) {
  e = e || window.event;
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
}

// 获取鼠标点击坐标
function pagePos(e) {
  var sLeft = getScrollOffset().left,
    sTop = getScrollOffset().top,
    cLeft = document.documentElement.clientLeft,
    cTop = document.documentElement.clientTop;

  return {
    x: e.clientX + sLeft - cLeft,
    y: e.clientY + sTop - cTop,
  };
}
