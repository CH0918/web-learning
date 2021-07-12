// var oLis = document.getElementsByClassName('tab-item'),
//     contentItems = document.getElementsByClassName('content-item'),
//     lisLen = oLis.length;
// for (var i = 0; i < lisLen; i++) {
//   (function(i) {
//     oLis[i].addEventListener('click', function() {
//       for (var j = 0; j < lisLen; j++) {
//         oLis[j].className = 'tab-item';
//         contentItems[j].className = 'content-item';
//       }
//       this.className += ' active';
//       contentItems[i].className += ' cur';
//     }, false);
//   })(i)
// }

// 插件
(function () {
  function Tab(options) {
    this.tabClassName = options.tabClassName;
    this.contentClassName = options.contentClassName;
    this.bindEvent();
  }
  Tab.prototype = {
    bindEvent() {
      var tabClassName = this.tabClassName,
        contentClassName = this.contentClassName;
      var tabList = document.getElementsByClassName(tabClassName),
        contentList = document.getElementsByClassName(contentClassName),
        tabListLen = tabList.length;
      for (var i = 0; i < tabListLen; i++) {
        (function (i) {
          tabList[i].addEventListener(
            'click',
            function () {
              for (var j = 0; j < tabListLen; j++) {
                tabList[j].className = tabClassName;
                contentList[j].className = contentClassName;
              }
              this.className += ' active';
              contentList[i].className += ' cur';
            },
            false
          );
        })(i);
      }
    },
  };
  window.Tab = Tab;
})();
