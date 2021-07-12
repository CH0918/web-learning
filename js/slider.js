// var thumdItems = document.getElementsByClassName('thumd-item');
// var sliderItems = document.getElementsByClassName('slider-item');
// for (var i = 0; i < thumdItems.length; i++) {
//   (function(j) {
//     thumdItems[j].onclick = function() {
//       // 点击当前图片高亮
//       for (var k = 0; k <thumdItems.length; k++) {
//         thumdItems[k].className = 'thumd-item';
//         sliderItems[k].className = 'slider-item';
//       }
//       this.className += ' cur';
//       sliderItems[j].className += ' active';
//     }
//   })(i);
// } 

;(function() {
  function Slider(option) {
    this.option = option;
    this.sliders = document.getElementsByClassName(option.sliderItem);
    this.thumds = document.getElementsByClassName(option.thumdItem);
    this.bindEvent();
  }
  Slider.prototype.bindEvent = function() {
    var sliders = this.sliders,
        thumds = this.thumds;

    var _self = this;
    for(var i = 0; i < thumds.length; i++) {
      (function(j){
        thumds[j].onclick = function() {
          for(var k = 0; k < thumds.length; k++) {
            thumds[k].className = _self.option.thumdItem;
            sliders[k].className = _self.option.sliderItem;
          }
          thumds[j].className += ' cur';
          this.className += ' active';
        }
      })(i)
    }
    
  }
  window.Slider = Slider;
}())

