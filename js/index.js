// var box = document.getElementsByClassName('box')[0];
// var nodes = box.childNodes;
// var ul1 = nodes[1];

// console.log(nodes);


// // 获取样式属性，兼容性写法
// function getStyle(ele, prop) {
//   if (window.getComputedStyle) {
//     return prop ? window.getComputedStyle(ele, null)[prop] : window.getComputedStyle(ele, null);
//   } else {
//     return prop ? window.currentStyle[prop] : window.currentStyle[prop];
//   }
// }

// var box1 = document.querySelector('.box1');
// box1.onclick = function() {
//   var width = getStyle(box1, 'width');
//   box1.style.width = parseInt(width) + 30 + 'px';
//   console.log(width);

//   box1.className += ' active';
// }


// var dropdown = document.querySelector('.dropdown'),
//     oUl = document.querySelector('.item-list'),
//     listHeight = 0,
//     speed = 5;
// dropdown.onmouseenter = function() {
//   // 清除抖动
//   clearInterval(timer);
//   var timer = setInterval(function() {
//     console.log(listHeight);
//     if (listHeight >= 150) {
//       clearInterval(timer);
//     } else {
//       listHeight = parseInt(getSite(oUl, 'height')) + speed;
//       oUl.style.height = listHeight + 'px';
//     }
//   }, 1);
//   this.className += ' up';
//   // oUl.style.height = '150px';
// }
// dropdown.onmouseleave = function() {
//   clearInterval(timer);
//   var timer = setInterval(function() {
//     if (listHeight <= 0) {
//       clearInterval(timer);
//     } else {
//       listHeight = parseInt(getSite(oUl, 'height')) - speed;
//       oUl.style.height = listHeight + 'px';     
//     }
//   }, 1);
//   this.className = 'dropdown';
// }

// function getSite(ele, prop) {
//   if (window.getComputedStyle) {
//     return prop ? window.getComputedStyle(ele, null)[prop] : window.getComputedStyle(ele, null);
//   } else {
//     return prop ? window.currentStyle[prop] : window.currentStyle;
//   }
// }


// function bindEvent(el, type, fn) {
//   if (el.addEventListener) {
//     el.addEventListener(type, fn, false);
//   } else if (el.attachEvent) {
//     el.attachEvent('on' + type, fn.bind(el));
//   } else {
//     el['on' + type] = fn;
//   }
// }
// var box3 = document.querySelector('.box3');
// bindEvent(box3, 'click', function() {
//   console.log('点击！');
// })

////////////////////////////////
function getEle(t) {
  return document.querySelector(t);
}
var wrapper = getEle('.wrapper'),
    outer = getEle('.outer'),
    inner = getEle('.inner');
wrapper.addEventListener('click', function() {
  console.log('wrapper');
}, true);
outer.addEventListener('click', function() {
  console.log('outer');
}, true);
inner.addEventListener('click', function() {
  console.log('inner');
}, false);


var oUl = getEle('.list-ul');
oUl.onclick = function(e) {
  e = e || window.event,
      target = e.target || e.srcElement;
  console.log(target);
}