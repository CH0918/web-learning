(function () {
  function Snake() {
    this.snakeBodyArr = [
      { x: 0, y: 0 },
      { x: 0, y: 20 },
      { x: 0, y: 40 },
      { x: 0, y: 60 },
      { x: 0, y: 80 },
    ];
    this.dir = 'DOWN';
  }
  Snake.prototype = {
    init() {
      this.addEvent();
    },

    addEvent() {
      this.drawSnake();
      this.handleDirection();
    },

    drawSnake() {
      var fragment = document.createDocumentFragment(),
        snakeArr = this.snakeBodyArr,
        len = this.snakeBodyArr.length,
        oUl = document.getElementsByClassName('snake')[0];
      for (var i = 0; i < len; i++) {
        var li = document.createElement('li'),
          item = snakeArr[i];
        li.className = i === len - 1 ? 'snake-point snake-head' : 'snake-point';
        li.style.left = item.x + 'px';
        li.style.top = item.y + 'px';
        fragment.appendChild(li);
      }
      oUl.appendChild(fragment);
    },

    handleDirection() {
      var _self = this;
      bindEvent(document, 'keydown', function (e) {
        var e = e || window.event,
          keyCode = e.keyCode;
        console.log(keyCode);
        // up-38 down-40 left-37 right-39
        switch (keyCode) {
          case 38:
            if (_self.dir === 'DOWN') return;
            _self.dir = 'UP';
            _self._reDrawSnake();
            break;
          case 40:
            if (_self.dir === 'UP') return;
            _self.dir = 'DOWN';
            _self._reDrawSnake();
            break;
          case 37:
            if (_self.dir === 'RIGHT') return;
            _self.dir = 'LEFT';
            _self._reDrawSnake();
            break;
          case 39:
            if (_self.dir === 'LEFT') return;
            _self.dir = 'RIGHT';
            _self._reDrawSnake();
            break;
        }
      });
    },
    _reDrawSnake() {
      var snakeArr = this.snakeBodyArr,
        len = snakeArr.length,
        head = snakeArr[len - 1],
        dir = this.dir;
      console.log(dir);
      var x = head.x,
        y = head.y;
      switch (dir) {
        case 'LEFT':
          x -= 20;
          break;
        case 'RIGHT':
          x += 20;
          break;
        case 'UP':
          y -= 20;
          break;
        case 'DOWN':
          y += 20;
          break;
      }
      snakeArr.shift();
      snakeArr.push({ x, y });
      this._removeSnake();
      this.drawSnake();
    },
    _removeSnake() {
      var oUl = document.getElementsByClassName('snake')[0];
      oUl.innerHTML = '';
    },
  };

  new Snake().init();
})();
